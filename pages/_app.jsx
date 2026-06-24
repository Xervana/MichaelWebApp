import "@/styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";

// Suppress a single benign warning emitted by the bundled SignalR client inside
// the third-party TrueEngage widget: "No client method with the name '...' found."
// The server hub invokes a client method the widget never registered a handler
// for. It's harmless vendor noise; everything else is logged normally.
if (typeof window !== "undefined" && !window.__teWarnFilter) {
  window.__teWarnFilter = true;
  const originalWarn = console.warn.bind(console);
  console.warn = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("No client method with the name")
    ) {
      return;
    }
    originalWarn(...args);
  };

  // Swallow a benign TypeError the TrueEngage widget throws during its own
  // teardown when the X is clicked ("Cannot read properties of null (reading
  // 'subscribeToVideo')"). It happens as the widget tears down a video object
  // that's already been nulled; the page reloads right after, so it's moot.
  window.addEventListener(
    "error",
    (e) => {
      if (e.message && e.message.includes("subscribeToVideo")) {
        e.preventDefault();
      }
    },
    true
  );
}

export default function App({ Component, pageProps }) {
  // Reset the TrueEngage widget after it is closed, so the next time an
  // Inquire button is clicked it starts fresh ("as if the 1st time").
  // The widget exposes no public reset, so we reload once per open→close cycle.
  useEffect(() => {
    let opened = false;
    const onOpen = () => {
      opened = true;
    };
    const onClose = () => {
      // Defer the reload so the widget can finish its own teardown first.
      // Reloading synchronously interrupts it mid-cleanup and triggers an
      // internal "subscribeToVideo" error in the vendor bundle.
      if (opened) setTimeout(() => window.location.reload(), 200);
    };

    // Auto-close the widget once the user leaves the video feedback form, i.e.
    // a tab change where the form was the *previous* tab and the widget has
    // finished loading. The widget has no public close API, so we click the
    // same X button a user would. The X is an unlabeled SVG icon, so we find
    // it by a unique slice of its path's `d` attribute, then click the nearest
    // clickable ancestor. Update CLOSE_ICON_PATH if the icon markup changes.
    const CLOSE_ICON_PATH = "M11.7071 1.70711";

    const findCloseButton = (root = document) => {
      const path = root.querySelector?.(`path[d^="${CLOSE_ICON_PATH}"]`);
      if (path) {
        // Return the innermost element. We dispatch a bubbling event sequence
        // from here, so it propagates up through the SVG, its wrapper, and any
        // button/root listener — covering wherever the handler is bound.
        return path;
      }
      // Walk into any shadow roots the widget mounts.
      const hosts = root.querySelectorAll?.("*") || [];
      for (const el of hosts) {
        if (el.shadowRoot) {
          const found = findCloseButton(el.shadowRoot);
          if (found) return found;
        }
      }
      return null;
    };

    const onTabChanged = (e) => {
      const state = e.detail?.state || e.detail || {};
      if (
        state.component_state === "loaded" &&
        state.previous_widget_tab === "trueengage.video.feedback-form"
      ) {
        const btn = findCloseButton();
        if (btn) {
          // Fire a full pointer→mouse→click sequence. A plain click() didn't
          // close the widget, which means its X handler listens on
          // pointerdown/mousedown rather than click. Dispatching the whole
          // sequence (bubbling, so React's delegated root listener catches it)
          // covers whichever event the widget actually binds.
          const fire = (type, Ctor) =>
            btn.dispatchEvent(
              new Ctor(type, { bubbles: true, cancelable: true, view: window })
            );
          fire("pointerdown", window.PointerEvent || MouseEvent);
          fire("mousedown", MouseEvent);
          fire("pointerup", window.PointerEvent || MouseEvent);
          fire("mouseup", MouseEvent);
          fire("click", MouseEvent);
        } else {
          console.warn(
            "[TE auto-close] Close button not found; check CLOSE_SELECTOR."
          );
        }
      }
    };

    document.addEventListener("trueengage:widget_opened", onOpen);
    document.addEventListener("trueengage:widget_closed", onClose);
    document.addEventListener("trueengage:widget_tab_changed", onTabChanged);
    return () => {
      document.removeEventListener("trueengage:widget_opened", onOpen);
      document.removeEventListener("trueengage:widget_closed", onClose);
      document.removeEventListener(
        "trueengage:widget_tab_changed",
        onTabChanged
      );
    };
  }, []);

  return (
    <>
      <Script
        //TE Widget Account
        //src="https://asset.trueengage.com/accounts/7d0e4220-8a58-43d2-9711-d7cbe66e1479/widget.js"
        
        //Trends Widget Account
        src="https://asset.trueengage.com/accounts/067e40c5-c0a6-49be-a2db-241720a76cb5/widget.js"
        
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

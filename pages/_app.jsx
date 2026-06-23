import "@/styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";

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
      if (opened) window.location.reload();
    };
    document.addEventListener("trueengage:widget_opened", onOpen);
    document.addEventListener("trueengage:widget_closed", onClose);
    return () => {
      document.removeEventListener("trueengage:widget_opened", onOpen);
      document.removeEventListener("trueengage:widget_closed", onClose);
    };
  }, []);

  return (
    <>
      <Script
        src="https://asset.trueengage.com/accounts/7d0e4220-8a58-43d2-9711-d7cbe66e1479/widget.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

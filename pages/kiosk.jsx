import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { img, ACCOUNTS, CARDS, LOANS } from "@/lib/products";

const CATEGORIES = ["Accounts", "Credit Cards", "Loans"];

// No tab pane on the kiosk — accounts are shown as one flat slider.
const ACCOUNTS_FLAT = [...ACCOUNTS.Savings, ...ACCOUNTS.Checking];

function itemsFor(category) {
  if (category === "Accounts") return ACCOUNTS_FLAT;
  if (category === "Credit Cards") return CARDS;
  return LOANS;
}

function labelFor() {
  return "Inquire";
}

function KioskCard({ item, index, actionLabel }) {
  return (
    <article className="ecard kiosk-card">
      <div className="ecard__media">
        <span className={`blob blob--a blob--${index % 3}`} aria-hidden="true" />
        <span className="blob blob--b" aria-hidden="true" />
        <img
          className="ecard__img"
          src={img(item.photo)}
          alt={item.alt}
          loading="lazy"
        />
      </div>
      <h3 className="ecard__title">{item.title}</h3>
      <p className="ecard__desc">{item.desc}</p>
      <button
        type="button"
        className="btn btn--primary kiosk-card__btn"
        onClick={() => {
          window.trueengage?.addCustomAttribute("Product", item.title);
          window.trueengage?.openView("video");
        }}
      >
        {actionLabel}
      </button>
    </article>
  );
}

function Slider({ category }) {
  const trackRef = useRef(null);
  const items = itemsFor(category);
  const actionLabel = labelFor(category);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // Enable an arrow only when there is hidden content in that direction.
  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 2);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
  };

  // Reset to the start and recompute whenever the category changes, and on resize.
  useEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollLeft = 0;
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [category]);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".kiosk-card");
    const amount = card ? card.offsetWidth + 28 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="kiosk__slider-wrap">
      {canPrev && (
        <button
          type="button"
          className="kiosk__arrow kiosk__arrow--prev"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
        >
          &larr;
        </button>
      )}
      <div className="kiosk__slider" ref={trackRef} onScroll={updateArrows}>
        {items.map((item, i) => (
          <KioskCard
            key={item.title}
            item={item}
            index={i}
            actionLabel={actionLabel}
          />
        ))}
      </div>
      {canNext && (
        <button
          type="button"
          className="kiosk__arrow kiosk__arrow--next"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
        >
          &rarr;
        </button>
      )}
    </div>
  );
}

export default function Kiosk() {
  const [category, setCategory] = useState(null);

  return (
    <>
      <Head>
        <title>BDC Kiosk</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="kiosk">
        {/* Brand bar */}
        <header className="kiosk__bar">
          {category ? (
            <button
              className="kiosk__back"
              onClick={() => setCategory(null)}
              aria-label="Back to start"
            >
              &larr; Back
            </button>
          ) : (
            <span className="kiosk__back kiosk__back--ghost" aria-hidden="true" />
          )}
          <span className="kiosk__brand">BDC</span>
          <span className="kiosk__back kiosk__back--ghost" aria-hidden="true" />
        </header>

        {/* Screens */}
        <main className="kiosk__body">
          {category === null ? (
            <div className="kiosk__home">
              <h1 className="kiosk__greeting">How can we help you today?</h1>
              <div className="kiosk__choices">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    className="kiosk__choice"
                    onClick={() => setCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="kiosk__category">
              <h2 className="kiosk__title">{category}</h2>
              <Slider category={category} />
            </div>
          )}
        </main>
      </div>
    </>
  );
}

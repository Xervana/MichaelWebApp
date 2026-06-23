import { useState } from "react";
import { img, ACCOUNTS, CARDS, LOANS } from "@/lib/products";

function ProductCard({ item, index, primaryLabel }) {
  return (
    <article className="ecard">
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
      <h4 className="ecard__title">{item.title}</h4>
      <p className="ecard__desc">{item.desc}</p>
      <div className="ecard__actions">
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => {
            window.trueengage?.addCustomAttribute("Product", item.title);
            window.trueengage?.openView("video");
          }}
        >
          {primaryLabel}
        </button>
      </div>
    </article>
  );
}

export default function ExploreSections() {
  const [tab, setTab] = useState("Savings");

  return (
    <>
      {/* Explore Accounts */}
      <section className="explore explore--tint" id="explore-accounts">
        <div className="container">
          <h2 className="explore__title">Explore Accounts</h2>
          <div className="explore__tabs" role="tablist" aria-label="Account types">
            {Object.keys(ACCOUNTS).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                className={`explore__tab${tab === key ? " is-active" : ""}`}
                onClick={() => setTab(key)}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="ecards">
            {ACCOUNTS[tab].map((item, i) => (
              <ProductCard
                key={item.title}
                item={item}
                index={i}
                primaryLabel="Inquire"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Credit Cards */}
      <section className="explore explore--tint" id="explore-cards">
        <div className="container">
          <h2 className="explore__title">Explore Credit Cards</h2>
          <div className="ecards">
            {CARDS.map((item, i) => (
              <ProductCard
                key={item.title}
                item={item}
                index={i}
                primaryLabel="Inquire"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Loans */}
      <section className="explore" id="explore-loans">
        <div className="container">
          <h2 className="explore__title">Explore Loans</h2>
          <div className="ecards">
            {LOANS.map((item, i) => (
              <ProductCard
                key={item.title}
                item={item}
                index={i}
                primaryLabel="Inquire"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

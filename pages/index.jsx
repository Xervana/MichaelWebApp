import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Banking | We find ways</title>
        <meta
          name="description"
          content="Personal banking — accounts, cards, loans, insurance and investments. We find ways."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Top utility bar */}
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <nav className="utility-bar__links" aria-label="Utility">
            <a href="#">Personal</a>
            <a href="#">Private</a>
            <a href="#">SME</a>
            <a href="#">Corporate</a>
            <a href="#">About Us</a>
          </nav>
          <div className="utility-bar__actions">
            <a href="#">Locate Us</a>
            <a href="#">Help &amp; Support</a>
            <a href="#" className="utility-bar__search" aria-label="Search">
              &#128269;
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">Banking made personal</p>
            <h1 className="hero__title">
              Your money, your goals.
              <br />
              We find ways to get you there.
            </h1>
            <p className="hero__sub">
              Open an account, manage your cards, and grow your savings — all in
              one secure place.
            </p>
            <div className="hero__cta">
              <a href="#accounts" className="btn btn--primary">
                Open an Account
              </a>
              <a href="#" className="btn btn--ghost">
                Apply for a Card
              </a>
            </div>
          </div>
          <div className="hero__card" aria-hidden="true">
            <div className="vcard">
              <div className="vcard__top">
                <span className="vcard__brand">BDC</span>
                <span className="vcard__chip"></span>
              </div>
              <div className="vcard__number">
                5412&nbsp; 7534&nbsp; 9821&nbsp; 0042
              </div>
              <div className="vcard__row">
                <div>
                  <span className="vcard__label">Card Holder</span>
                  <br />
                  JUAN DELA CRUZ
                </div>
                <div>
                  <span className="vcard__label">Valid Thru</span>
                  <br />
                  09 / 29
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="quicklinks">
        <div className="container quicklinks__grid">
          <a href="#accounts" className="ql">
            <span className="ql__icon">&#128176;</span>
            <span className="ql__label">Open an Account</span>
          </a>
          <a href="#cards" className="ql">
            <span className="ql__icon">&#128179;</span>
            <span className="ql__label">Apply for a Card</span>
          </a>
          <a href="#loans" className="ql">
            <span className="ql__icon">&#127968;</span>
            <span className="ql__label">Get a Loan</span>
          </a>
          <a href="#invest" className="ql">
            <span className="ql__icon">&#128200;</span>
            <span className="ql__label">Start Investing</span>
          </a>
          <a href="#" className="ql">
            <span className="ql__icon">&#128241;</span>
            <span className="ql__label">Send Money</span>
          </a>
        </div>
      </section>

      {/* Products */}
      <main>
        <section className="section" id="accounts">
          <div className="container">
            <header className="section__head">
              <h2 className="section__title">Explore our products</h2>
              <p className="section__lede">
                Everything you need to bank, borrow, protect, and invest.
              </p>
            </header>
            <div className="cards">
              <article className="pcard" id="cards-anchor">
                <div className="pcard__band pcard__band--blue"></div>
                <h3>Deposit Accounts</h3>
                <p>
                  Savings, checking and time deposits with easy access and
                  competitive rates.
                </p>
                <a href="#" className="link">
                  Learn more &rarr;
                </a>
              </article>
              <article className="pcard" id="cards">
                <div className="pcard__band pcard__band--red"></div>
                <h3>Credit Cards</h3>
                <p>
                  Rewards, cashback, and travel cards designed around how you
                  spend.
                </p>
                <a href="#" className="link">
                  Learn more &rarr;
                </a>
              </article>
              <article className="pcard" id="loans">
                <div className="pcard__band pcard__band--blue"></div>
                <h3>Loans</h3>
                <p>
                  Home, auto, and personal loans with flexible terms and fast
                  approval.
                </p>
                <a href="#" className="link">
                  Learn more &rarr;
                </a>
              </article>
              <article className="pcard" id="insure">
                <div className="pcard__band pcard__band--red"></div>
                <h3>Insurance</h3>
                <p>
                  Protect what matters with life, health, and property coverage.
                </p>
                <a href="#" className="link">
                  Learn more &rarr;
                </a>
              </article>
              <article className="pcard" id="invest">
                <div className="pcard__band pcard__band--blue"></div>
                <h3>Investments</h3>
                <p>Funds, bonds, and trust products to help your money grow.</p>
                <a href="#" className="link">
                  Learn more &rarr;
                </a>
              </article>
              <article className="pcard">
                <div className="pcard__band pcard__band--red"></div>
                <h3>Digital Banking</h3>
                <p>
                  Bank anytime with secure mobile and online banking on any
                  device.
                </p>
                <a href="#" className="link">
                  Learn more &rarr;
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Promo banner */}
        <section className="promo" id="promos">
          <div className="container promo__inner">
            <div>
              <p className="promo__eyebrow">Limited-time offer</p>
              <h2 className="promo__title">
                Open a savings account online and get rewarded
              </h2>
              <p className="promo__sub">
                No initial deposit required for select accounts. Apply in
                minutes.
              </p>
            </div>
            <a href="#accounts" className="btn btn--primary">
              Get started
            </a>
          </div>
        </section>

        {/* Trust strip */}
        <section className="section">
          <div className="container trust">
            <div className="trust__item">
              <span className="trust__icon">&#128274;</span>
              <h3>Bank-grade security</h3>
              <p>
                Multi-layered protection and 24/7 fraud monitoring keep your
                money safe.
              </p>
            </div>
            <div className="trust__item">
              <span className="trust__icon">&#127760;</span>
              <h3>Nationwide access</h3>
              <p>
                Thousands of branches and ATMs, plus banking wherever you are.
              </p>
            </div>
            <div className="trust__item">
              <span className="trust__icon">&#9203;</span>
              <h3>Fast &amp; simple</h3>
              <p>
                Open accounts and apply for products in minutes, fully online.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

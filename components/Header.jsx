import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="brand" aria-label="Home">
          <span className="brand__mark">BDC</span>
          <span className="brand__tag">
            We find ways<span className="brand__dot">.</span>
          </span>
        </Link>
        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Primary">
          <a href="#explore-accounts">Accounts</a>
          <a href="#explore-cards">Cards</a>
          <a href="#explore-loans">Loans</a>
          <a href="#promos">Promos</a>
        </nav>
        <a href="#" className="btn btn--login">
          Online Banking Login
        </a>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
}

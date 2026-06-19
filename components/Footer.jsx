export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="brand__mark brand__mark--light">BDC</span>
          <p className="footer__tag">
            We find ways<span className="brand__dot">.</span>
          </p>
          <p className="footer__fine">
            Member: PDIC. Deposits are insured by PDIC up to the maximum amount
            allowed by law.
          </p>
        </div>
        <div className="footer__col">
          <h4>Products</h4>
          <a href="#accounts">Accounts</a>
          <a href="#cards">Cards</a>
          <a href="#loans">Loans</a>
          <a href="#invest">Investments</a>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Locate Us</a>
          <a href="#">Contact</a>
          <a href="#">Security Tips</a>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Newsroom</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>
            &copy; 2026 BDC Personal Banking. This is a demo project and is not
            affiliated with any bank.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Twitter">
              x
            </a>
            <a href="#" aria-label="Instagram">
              &#9673;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

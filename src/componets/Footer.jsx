import "../styles/footer.css";
export default function Footer({ variant }) {
  return (
    <>
      <footer className={`footer footer-${variant}`}>
        © <time dateTime="2025">2025</time> Negozio Nike All rights reserved.
        <a
          href="/credits"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link ms-1"
        >
          Credits
        </a>
      </footer>
    </>
  );
}

import "../styles/footer.css";
export default function Footer({ variant }) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className={`footer footer-${variant}`}>
        © <time dateTime={currentYear}>{currentYear}</time> Negozio Nike All
        rights reserved.
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

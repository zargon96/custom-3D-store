import "../styles/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="box-footer">
        <div className="box-footer-content">
          <h6 className="footer-title">JUST DO IT.</h6>
          <p className="footer-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            obcaecati, reprehenderit ex incidunt, quia sunt odio recusandae,
            aliquam minus corporis eos fugiat aperiam blanditiis voluptas.
            Veniam assumenda consectetur veritatis libero molestias autem.
          </p>
        </div>
      </div>
      <footer className="footer">
        © <time dateTime={currentYear}>{currentYear}</time> Negozio Nike All
        rights reserved.
        <a
          href="/credits"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Credits
        </a>
      </footer>
    </>
  );
}

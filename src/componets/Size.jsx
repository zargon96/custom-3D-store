import "../styles/size.css";
import barcode from "../assets/img/barcode.webp";
export default function Size() {
  return (
    <>
      <div className="size-column">
        <div className="size-top">
          <img
            className="size-barcode-top"
            src={barcode}
            alt="Codice a barre"
          />
          <h2 className="size-title">Nike Air Max</h2>
          <h3 className="size-subtitle">Akatsuki</h3>
        </div>
        <div className="size-middle">
          <p className="size-brand">NIKE</p>
        </div>
        <div className="size-bottom">
          <div className="box-size">
            <p className="size-range">36 - 42</p>
            <p className="size-info">Sizes Available</p>
            <button className="btn-order">Order now</button>
          </div>
          <div className="ticket">
            <div className="ticket-content"></div>
          </div>
          <img
            className="size-barcode-bottom"
            src={barcode}
            alt="Codice a barre"
          />
        </div>
      </div>
    </>
  );
}

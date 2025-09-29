import Navbar from "../componets/Navbar";
import Size from "../componets/Size";
import Hero from "../componets/Hero";
import { lazy } from "react";
const ShoeCanvas = lazy(() => import("../componets/ShoeCanvas"));

import Footer from "../componets/Footer";
import Description from "../componets/Description";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-12">
          <Navbar />
          <Hero />
          <div className="canvas-container">
            <ShoeCanvas />
          </div>
          <Description />
          <Footer variant="desktop" />
        </div>
        <div className="col-lg-4 col-12">
          <div className="box-nike">
            <Size />
            <Footer variant="mobile" />
          </div>
        </div>
      </div>
    </div>
  );
}

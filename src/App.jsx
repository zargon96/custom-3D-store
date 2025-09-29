import "./App.css";
import Navbar from "./componets/Navbar";
import Size from "./componets/Size";
import Hero from "./componets/Hero";
import ShoeCanvas from "./componets/ShoeCanvas";
import Footer from "./componets/Footer";
import Credits from "./pages/Credits";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <Navbar />
                  <Hero />
                  <div className="canvas-container">
                    <ShoeCanvas />
                  </div>
                  <Footer />
                </div>
                <div className="col-4">
                  <div className="box-nike">
                    <Size />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;

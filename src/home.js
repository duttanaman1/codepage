import React, { useState } from "react";
import Navbar from "./components/navbar";
import Figure from "./components/figure";
import About from "./components/about";
import FooterNav from "./components/footerNav";
import Footer from "./components/footer";
import "./home.css";

function Home() {
  return (
    <div id="react-home-promo">
      <section className="home-section HomePromo_root-jvLdH">
        <div className="width-wrapper HomePromo_views-3udHy">
          <div
            className="HomePromo_view-N8c2S HomePromo_activeView-34r17"
            data-test-id="promo-buildtestdeploy"
          >
            <Figure />
            <About />
          </div>
        </div>
        <FooterNav />
      </section>
      <Footer />
    </div>
  );
}

export default Home;

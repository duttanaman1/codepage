import React, { useState } from "react";
import HtmlFigure from "./htmlFigure";
import ScssFigure from "./scssFigure";
import JsFigure from "./jsFigure";
import "../home.css";
function Figure() {
  return (
    <figure className="HomePromo_viewIllustration-1ySJX">
      <img
        src="https://static.codepen.io/assets/packs/illu-editor-24091b7edc92fba11a2595fe767e6c2b.png"
        className="BuildTestDeploy_editorStatic-1Zb1w"
      />
      <div className="BuildTestDeploy_editor-2szsU">
        <div className="BuildTestDeploy_editorBg-30Vuf"></div>
        <div className="homeIlluDots green"></div>
        <div className="homeIlluDots yellow"></div>
        <div className="homeIlluDots blue"></div>
        <HtmlFigure />
        <ScssFigure />
        <JsFigure />
      </div>
    </figure>
  );
}

export default Figure;

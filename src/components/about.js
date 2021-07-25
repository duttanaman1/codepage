import React, { useState } from "react";
import "../home.css";
function Figure() {
  return (
    <div className="promo-text HomePromo_viewText-8bVQc">
      <h1>
        <span className="primaryColor">DropShip</span> is a social development
        environment for front-end designers and developers.
      </h1>
      <p>
        It is the best place to build and deploy applications, show off your
        work, build test cases, and find inspiration.
      </p>
      <div className="calls-to-action">
        <a className="button big bold green" href="/accounts/signup">
          Sign Up
        </a>
        <a className="button big bold" href="/pen/tour/welcome/start">
          <span className="primaryColor">Register</span>
        </a>
      </div>
    </div>
  );
}

export default Figure;

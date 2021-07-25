import React, { useState } from "react";
import "../home.css";
function FooterNav() {
  return (
    <div className="HomePromo_links-2Qrne">
      <div className="HomePromo_linkItem-2ZU0m HomePromo_active-TNATw">
        <h2>Build, test, and deploy code</h2>
      </div>
      <div className="HomePromo_linkItem-2ZU0m">
        <h2>
          Go <span className="badge badge-pro ">PRO</span> with Collab Mode
        </h2>
      </div>
      <div className="HomePromo_linkItem-2ZU0m">
        <h2>
          Unite your coworkers with <span className="badge badge-pro">PRO</span>{" "}
          Team account
        </h2>
      </div>
      <div className="HomePromo_linkItem-2ZU0m">
        <h2>Discover inspiring work</h2>
      </div>
    </div>
  );
}

export default FooterNav;

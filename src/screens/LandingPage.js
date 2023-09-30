// WelcomePage.js

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
  return (
    <div class="image" className="background-image">
      <Link
        className="txt-link"
        to="https://www.spacex.com/human-spaceflight/index.html"
      >
        <p className="txt-btn">Home</p>
      </Link>
    </div>
  );
};

export default LandingPage;

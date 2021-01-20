import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./IntSection.css";

function IntSection() {
  return (
    <div className="int-container">
      <h1>ITZY</h1>
      <div className="int-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET TO KNOW
        </Button>
      </div>
    </div>
  );
}

export default IntSection;

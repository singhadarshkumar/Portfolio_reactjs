import React, { Component } from "react";
import Pdf from "./cv/aks.pdf";

export class Resume extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-left">
        <p>Download the Resume by clicking on &nbsp; </p>
        <a href={Pdf} target="_blank">
          <p id="link">download </p>
        </a>
        <p>&nbsp;.</p>
      </div>
    );
  }
}
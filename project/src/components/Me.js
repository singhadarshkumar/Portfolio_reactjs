import React, { Component } from "react";
import aks from "./img/aks.jpeg";
export class Me extends Component {
  render() {
    return (
      <>
        <div className="mt-5 d-flex justify-content-left">
          <img id="img" src={aks} />
          <div id="x" class="conatiner">
            <h2>
              I'm <span style={{ color: "blue" }}>Adarsh Kumar Singh</span>
            </h2>
            <p>
              Computer Science student passionate about Full Stack Development.
              Eager to work for an organization which provides me the
              opportunity to improve my skills and knowledge to grow along with
              the organization objectives.
            </p>
            <h5>Skills</h5>

            <div id="skill">
              <span id="skills">Frontend Developer</span>
              <span id="skills">C/C++</span>
              <span id="skills">JAVA</span>
            </div>
            <div id="skill">
              <span id="skills">Python</span>
              <span id="skills">Nodejs</span>
              <span id="skills">Photography</span>
              <span id="skills">Badminton</span>
            </div>

            <div>
              <span>To see my projects, Go to my </span>
              <form action="https://github.com/singhadarshkumar">
                <button type="submit" class="btn btn-success">
                  GitHub
                </button>
              </form>
              <span>For LinkedIn profile</span>
              <form action="https://www.linkedin.com/in/adarsh-kumar-singh-6a24b5144">
                <button type="submit" class="btn btn-info">
                  LinkedIn
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

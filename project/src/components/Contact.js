import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-left">
        <h3>
          Want to connect/contact Adarsh,
          <ul>
            <li>Email Id- aksking99@gmail.com</li>
            <li>Whatsapp- (+91)-7087042011</li>
            <li>Contact- (+91)-7004572873</li>
            <li>
              LinkedIn-
              <a href="https://www.linkedin.com/in/adarsh-kumar-singh-6a24b5144">
                Link
              </a>
            </li>
            <li>
              Twitter-<a href="https://twitter.com/adarshkingdon">Link</a>
            </li>
          </ul>
        </h3>
      </div>
    );
  }
}

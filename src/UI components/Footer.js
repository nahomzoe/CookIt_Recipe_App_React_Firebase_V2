import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">
              <h5>Contact us</h5>{" "}
            </div>
            <div className="phone">
              <a href="#">
                <i className="fas fa-phone-volume"></i>+358 0000 0040
              </a>
            </div>
            <div className="email">
              <a href="#">
                <i className="fas fa-envelope"></i>nahom130g@gmail.com
              </a>
            </div>
          </div>
          <div className="lower"></div>
          <div className="middle box"></div>
        </div>
        <div className="middle box">
          <div className="media-icons">
            <a href="https://www.facebook.com/bchelsinki">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://business.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://business.twitter.com/en/basics/intro-twitter-for-business.html">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/user/hbusinesscollege">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/nahom-asfaw-6b78a6185/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="right box">
          <div className="topic">
            {" "}
            <h5>Subscribe us</h5>
          </div>
          <form action="#">
            <input type="text" placeholder="Enter email address" />
            <input type="submit" name="email" value="Send" />
          </form>
        </div>
      </div>
      <div className="bottom">
        <p>
          Copyright © 2022 <a href="https://github.com/nahomzoe">nahom</a> All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

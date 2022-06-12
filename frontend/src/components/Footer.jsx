import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About Rupin Vijan</h6>
              <p className="text-justify">
                I am a MERN Stack Developer and a JavaScript enthusiast. In
                addition to JavaScript, I've worked with Next.js, Node.js, and
                React.js. I am particularly passionate about creating Python and
                JavaScript backend APIs. My passion is making computers more
                effective on your side by relieving you of repetitive tasks
                through automotive processes by enabling them to work on your
                behalf.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Socials</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/">Linkedin</Link>
                </li>
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Instagram</Link>
                </li>
                <li>
                  <Link to="/">Github</Link>
                </li>
                <li>
                  <Link to="/">Resume</Link>
                </li>
                <li>
                  <Link to="/">Website</Link>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/order">Orders</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signp</Link>
                </li>
                <li>
                  <Link to="cart">Cart</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <Link to="https://rupinvijan.github.io/portfolio/">Rupin</Link>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <Link className="facebook" to="/">
                    <i className="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="twitter" to="/">
                    <i className="bi bi-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link className="dribbble" to="/">
                    <i className="bi bi-whatsapp"></i>
                  </Link>
                </li>
                <li>
                  <Link className="linkedin" to="/">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

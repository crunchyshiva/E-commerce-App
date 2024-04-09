import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

function Footer() {
  return (
    <footer
      className="text-center text-lg-start"
      style={{ backgroundColor: '#333333', color: '#fff' }}
    >
      {/* Social media section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Right */}
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100024552923562"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/crunchy_shiva/"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-pathak-9b8921202/"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/crunchyshiva" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      {/* Links section */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Column for logo */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Shopito</h6>
              <p>
                "Shopito: Your Gateway to Tech Bliss! Elevating Your Electronics
                Experience, One Innovation at a Time!"
              </p>
            </div>

            {/* Column for Links */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/About" className="text-reset">
                  About-Us
                </Link>
              </p>
              <p>
                <Link to="/contact" className="text-reset">
                  Contact
                </Link>
              </p>
            </div>
            {/* Column for women dresses links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
              <p>
                <Link to="/" className="text-reset">
                  Laptops
                </Link>
              </p>
              <p>
                <Link to="/category/cameras" className="text-reset">
                  Cameras
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Wearables
                </Link>
              </p>
            </div>

            {/* Column for men dresses links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
              <p>
                <Link to="/" className="text-reset">
                  Speakers
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Accessories
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Mobiles & Tables
                </Link>
              </p>
            </div>

            {/* Column for contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-3" />
                Aligarh,Uttar Pradesh, India
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                crunchyshiva@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faWhatsapp} className="me-3" />
                9012886503
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="#">
          @Shopito by SHIVAM PATHAK
        </a>
      </div>
    </footer>
  );
}

export default Footer;

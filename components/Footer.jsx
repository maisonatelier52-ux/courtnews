import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";  // Corrected to FaTwitter
import { SiYoutube, SiRss } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/02/logo.png"
            alt="Foxiz Logo"
            className="footer-logo-img"
          />
          <p className="footer-description">
            We influence 20 million users and is the number one business and
            technology news network on the planet.
          </p>
        </div>

        {/* Categories Section */}
        <div className="footer-categories">
          <div className="footer-category-column">
            <Link href="#">Innovate</Link>
            <Link href="#">Gadget</Link>
            <Link href="#">PC Hardware</Link>
            <Link href="#">Review</Link>
            <Link href="#">Software</Link>
          </div>
          <div className="footer-category-column">
            <Link href="#">Medicine</Link>
            <Link href="#">Children</Link>
            <Link href="#">Coronavirus</Link>
            <Link href="#">Nutrition</Link>
            <Link href="#">Disease</Link>
          </div>
          <div className="footer-category-column">
            <Link href="#">Stars</Link>
            <Link href="#">Screen</Link>
            <Link href="#">Culture</Link>
            <Link href="#">Media</Link>
            <Link href="#">Videos</Link>
          </div>
        </div>

        {/* Social Media and Footer Links */}
        <div className="footer-social-links">
          <div className="footer-social">
            <h4>Find Us on Socials</h4>
            <div className="footer-social-icons">
              <Link href="#" aria-label="Facebook">
                <FaFacebookF />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaTwitter />
              </Link>
              <Link href="#" aria-label="YouTube">
                <SiYoutube />
              </Link>
              <Link href="#" aria-label="RSS Feed">
                <SiRss />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy;  News Network. Ruby Design Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

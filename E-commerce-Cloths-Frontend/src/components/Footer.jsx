import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary mt-20">
      
      {/* Main Footer */}
      <div className="max-padd-container py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="font-paci text-3xl mb-4">
            Shopsyyy.<span className="text-secondary">.</span>
          </h2>

          <p className="text-gray-30 leading-6 max-w-[320px]">
            Discover stylish clothing and shoes online, crafted for comfort
            and quality. Shop fashion-forward designs that elevate your look
            and fit every lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="bold-18 mb-4">Quick Links</h3>

          <ul className="flex flex-col gap-2 text-gray-30">
            <li className="hover:text-tertiary cursor-pointer transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-tertiary cursor-pointer transition">Best Sellers</li>
            <li className="hover:text-tertiary cursor-pointer transition">Offers & Deals</li>
            <li className="hover:text-tertiary cursor-pointer transition">
                <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-tertiary cursor-pointer transition">FAQs</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="bold-18 mb-4">Need Help?</h3>

          <ul className="flex flex-col gap-2 text-gray-30">
            <li className="hover:text-tertiary cursor-pointer transition">Delivery Information</li>
            <li className="hover:text-tertiary cursor-pointer transition">Return & Refund Policy</li>
            <li className="hover:text-tertiary cursor-pointer transition">Payment Methods</li>
            <li className="hover:text-tertiary cursor-pointer transition">Track your Order</li>
            <li className="hover:text-tertiary cursor-pointer transition">Contact Us</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="bold-18 mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl text-gray-30">
            <FaInstagram className="cursor-pointer hover:text-tertiary transition" />
            <FaTwitter className="cursor-pointer hover:text-tertiary transition" />
            <FaFacebookF className="cursor-pointer hover:text-tertiary transition" />
            <FaYoutube className="cursor-pointer hover:text-tertiary transition" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-30 text-sm">
        Copyright 2026 © Shopsyyy. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
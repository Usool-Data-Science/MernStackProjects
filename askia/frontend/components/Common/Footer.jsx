import { FaYoutube, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const logo = [
    { name: "nafdac", url: "/nafdacLogo.svg" },
    { name: "nafdac", url: "/nafdacLogo.svg" },
    { name: "nafdac", url: "/nafdacLogo.svg" },
    { name: "son", url: "/sonLogo.png" },
  ];
  const accreditations = ["NAFDAC APPROVED", "SON APPROVED", "NAFDAC APPROVED"];
  const [subscriptionEmail, setSubscriptionEmail] = useState("");

  const navLinks = [
    { title: "About Us", url: "/about-us" },
    { title: "Blog", url: "/blog" },
    { title: "Products", url: "/products" },
    { title: "Health", url: "/health" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(subscriptionEmail);
    setSubscriptionEmail("");
  };

  return (
    <footer className="bg-ask-primary text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col gap-10">
        {/* Upper Footer */}
        <div className="flex flex-col lg:flex-row gap-10 border-t border-gray-300 pt-10">
          {/* Logo & Accreditation */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/3">
            <img
              src="/icons/askiaLogo.svg"
              alt="ASKIA Logo"
              className="w-40 h-auto object-contain"
            />

            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center gap-4">
              {logo.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.name}
                  className="w-8 h-8 rounded-full bg-white p-1"
                />
              ))}
            </div>

            {/* Accreditations */}
            <ul className="mt-4 space-y-1 text-sm list-disc list-inside">
              {accreditations.map((acc, ind) => (
                <li key={ind}>{acc}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Navigation */}
          <div className="flex flex-col items-center lg:items-start gap-6 w-full max-w-xl">
            {/* Newsletter */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-200 text-sm">
                Stay updated with our latest products, health tips, and
                exclusive offers.
              </p>
            </div>

            {/* Subscription Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row w-full max-w-xl mt-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={subscriptionEmail}
                onChange={(e) => setSubscriptionEmail(e.target.value)}
                className="flex-1 p-3 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none bg-white text-black placeholder-opacity-60 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-ask-secondary text-white px-6 py-3 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none hover:bg-gray-800 transition duration-300"
              >
                Subscribe
              </button>
            </form>

            {/* Navigation & Social Media */}
            <div className="flex flex-col md:flex-row w-full max-w-xl justify-between items-start gap-6 mt-6">
              {/* Navigation Links */}
              <ul className="list-disc pl-6 space-y-1 text-sm">
                {navLinks.map((navlink, index) => (
                  <li key={index}>
                    <Link to={navlink.url} className="hover:underline">
                      {navlink.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Media Icons */}
              <div className="flex gap-4 text-white">
                <a
                  href="https://www.youtube.com/@nafdacNigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="h-6 w-6 hover:text-red-500 transition" />
                </a>
                <a
                  href="https://www.instagram.com/nafdacNigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-6 w-6 hover:text-pink-500 transition" />
                </a>
                <a
                  href="https://wa.me/2348012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-6 w-6 hover:text-green-400 transition" />
                </a>
                <a
                  href="https://www.facebook.com/nafdacNigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-6 w-6 hover:text-blue-500 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center border-t border-gray-400 pt-6 text-sm">
          <p className="mb-2">
            <FaLocationDot className="inline-block h-4 w-4 text-ask-secondary mr-1" />
            4, Arikawe Ikosi Ketu Lagos
          </p>
          <p>© 2025 ASKIA Natural Herbal Remedy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

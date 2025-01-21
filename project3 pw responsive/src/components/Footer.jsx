import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About PW Skills</h3>
            <p className="text-sm">
              PW Skills is dedicated to empowering learners with the skills they need to succeed in
               competitive world. Join us for the best courses and resources to enhance your career.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-gray-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-gray-400 transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://facebook.com/pwskills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/pwskills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/pwskills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/pwskills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} PW Skills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

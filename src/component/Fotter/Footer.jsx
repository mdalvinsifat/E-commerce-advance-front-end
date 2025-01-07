import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo Section */}
        <div>
          <img
            src="https://bikribattashop.com/wp-content/uploads/2024/10/logo-1.webp"
            alt="Logo"
            className="h-12 mb-4"
          />
          <p className="text-gray-400 text-sm">
            Your trusted shop for all your needs. Explore our products and
            enjoy seamless shopping.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="text-gray-400 hover:text-white transition"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-400 hover:text-white transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/faq"
                className="text-gray-400 hover:text-white transition"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="text-gray-400 hover:text-white transition"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <span>Phone:</span> +880 123 456 7890
            </li>
            <li>
              <span>Email:</span>{' '}
              <a
                href="mailto:support@bikribatta.com"
                className="hover:text-white"
              >
                support@bikribatta.com
              </a>
            </li>
            <li>
              <span>Address:</span> Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-400 text-sm">
          © 2025 Bikribatta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

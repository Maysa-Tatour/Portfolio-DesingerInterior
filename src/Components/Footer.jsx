// Footer.jsx

import {
  FaInstagram,
  FaPinterest,
  FaBehance,
} from "react-icons/fa";

import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#081B34] text-white py-20 px-6">
      
      <div className="max-w-7xl mx-auto">

        {/* Top Footer */}
        <div className="grid md:grid-cols-4 gap-14 pb-14 border-b border-[#2b3d5d]">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-4xl font-bold">
                Luna <span className="text-pink-300">Ardent</span>
              </h2>

              <p className="text-gray-300 mt-2">
                Interior Designer
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Creating beautiful, functional and timeless spaces
              that reflect your personality and elevate everyday living.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              
              <div className="w-12 h-12 rounded-full bg-pink-300 text-[#081B34] flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 rounded-full bg-pink-300 text-[#081B34] flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <FaPinterest />
              </div>

              <div className="w-12 h-12 rounded-full bg-pink-300 text-[#081B34] flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <FaBehance />
              </div>

            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-300">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-4 text-gray-300">
              <li className="hover:text-pink-300 transition cursor-pointer">Home</li>
              <li className="hover:text-pink-300 transition cursor-pointer">About</li>
              <li className="hover:text-pink-300 transition cursor-pointer">Projects</li>
              <li className="hover:text-pink-300 transition cursor-pointer">Services</li>
              <li className="hover:text-pink-300 transition cursor-pointer">Testimonials</li>
              <li className="hover:text-pink-300 transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-300">
              Services
            </h3>

            <ul className="flex flex-col gap-4 text-gray-300">
              <li>Interior Design</li>
              <li>Space Planning</li>
              <li>3D Visualization</li>
              <li>Furniture Selection</li>
              <li>Home Styling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-300">
              Contact Info
            </h3>

            <div className="flex flex-col gap-6">

              <div className="flex items-center gap-4">
                <FiMail className="text-pink-300 text-xl" />
                <p className="text-gray-300">
                  hello@lunaardent.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FiPhone className="text-pink-300 text-xl" />
                <p className="text-gray-300">
                  +1 234 567 890
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FiMapPin className="text-pink-300 text-xl" />
                <p className="text-gray-300">
                  New York, USA
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-5">

          <p className="text-gray-400">
            © 2025 Luna Ardent. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <p className="hover:text-pink-300 transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-pink-300 transition cursor-pointer">
              Terms & Conditions
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
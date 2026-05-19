// Contact.jsx

import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="bg-[#F8CDD1] py-24 px-6 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <p className="text-pink-500 uppercase tracking-wider">
            Let's Talk
          </p>

          <h2 className="text-5xl font-bold text-[#0B1C3D] leading-tight">
            Have a Project <br /> in Mind?
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            I'd love to hear about your project and help you
            create a space you'll love.
          </p>

          <button className="bg-[#0B1C3D] text-white px-8 py-4 rounded-full w-fit flex items-center gap-3 hover:bg-[#132d5b] transition">
            Send Message
            <FiArrowRight />
          </button>
        </div>

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/img/contact.jpg"
            alt="contact"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-10">

          {/* Email */}
          <div className="flex items-center gap-5 border-b border-pink-300 pb-6">
            <div className="w-16 h-16 rounded-full bg-[#0B1C3D] flex items-center justify-center">
              <FiMail className="text-2xl text-pink-300" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0B1C3D]">
                Email
              </h3>

              <p className="text-gray-700">
                hello@lunaardent.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5 border-b border-pink-300 pb-6">
            <div className="w-16 h-16 rounded-full bg-[#0B1C3D] flex items-center justify-center">
              <FiPhone className="text-2xl text-pink-300" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0B1C3D]">
                Phone
              </h3>

              <p className="text-gray-700">
                +1 234 567 890
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#0B1C3D] flex items-center justify-center">
              <FiMapPin className="text-2xl text-pink-300" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0B1C3D]">
                Location
              </h3>

              <p className="text-gray-700">
                New York, USA
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
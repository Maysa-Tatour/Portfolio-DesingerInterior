import { FaStar } from "react-icons/fa";

 const testimonials = [
  {
    img: "/img/person1.jpg",
    name: "Sophia Carter",
    job: "Apartment Owner",
    text: "Amazing attention to detail and beautiful interior styling.",
  },

  {
    img: "/img/person2.jpg",
    name: "Daniel Moore",
    job: "Villa Client",
    text: "Professional communication and stunning final results.",
  },

  {
    img: "/img/person3.jpg",
    name: "Emma Wilson",
    job: "Office Renovation",
    text: "The design completely transformed our workspace beautifully.",
  },
];
export default function Testimonials (){
       return (
         <div className="py-20">
            <hr className="w-full mb-6 text-pink-200 "></hr>
        <div className="text-center mb-14">

          <p className="text-pink-400 uppercase tracking-widest mb-3">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-[#F8F7F6]">
            What Clients Say
          </h2>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, i) => (

            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-2 transition-all duration-300"
            >

              {/* User */}

              <div className="flex items-center gap-4 mb-5">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-xl font-semibold text-[#0B1C3D]">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.job}
                  </p>

                </div>

              </div>

              {/* Stars */}

              <div className="flex gap-1 text-pink-400 mb-5">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Text */}

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>
       )
}
import {FaBriefcase,FaHeart,FaClock,FaCheckCircle,FaBolt} from "react-icons/fa";
import Projects from "./Projects";
export default function Info(){
    return (
        <section className="bg-[#F8CDD1] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* About Section */}
                <div className="grid md:grid-cols-[400px_1fr_1px_250px] gap-12 items-center mb-20 place-items-center">
                      
                      {/*Image */}
                      <img 
                       src="/img/interior-2.jpg"
                       alt="About"
                       className="rounded-l-3xl shadow-lg"
                       />
                     {/* Content */}
                     <div className="max-w-md">
                        <p className="text-pink-400 mb-2">About Me</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Designing  Spaces That Inspire
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With a passion for detail and a love for creating beautiful spaces,I help my clients transform their ideas into functional and easthetic interior designs.
                        </p>
                        <p className="text-pink-400 text-xl font-signature italic">Luna Ardent</p>
                        </div>  
                        <div className="w-px md:h-[250px] bg-gray-600 "></div>
                       {/* State */}
                       <div className="flex flex-col gap-6 mt-6">
                         {/*Projects */}
                         <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-[#0B1C3D] flex items-center justify-center">
                            <FaBriefcase className="mx-auto text-pink-300 mb-2" size={22} /></div>
                            <div className="flex flex-col">
                            <p className="text-2xl font-bold text-pink-500">2+</p>
                            <p className="text-md text-[#0B1C3D]">Projects</p>
                         </div>
                         </div>
                         {/*Delivery */}
                         <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#0B1C3D] rounded-full flex justify-center items-center">
                            <FaCheckCircle className="mx-auto text-pink-300" size={22}/></div>
                            <p className="text-2xl font-bold text-pink-500">100%</p>
                            <p className="text-sm text-[#0B1C3D]" ></p>
                            
                         </div>
                         {/* Perfomance */}
                         <div className="flex items-center gap-4">
                             <div className="w-14 h-14 rounded-full bg-[#0B1C3D] flex items-center justify-center">
                            <FaBolt className=" text-pink-300" size={22} /></div>
                            <div className="flex flex-col">
                            <p className="text-2xl font-bold text-pink-500">Fast</p> 
                            <p className="text-sm text-[#0B1C3D]">Performance</p>
                            </div>
                         </div>
                       </div>
                </div>
            </div>
            <Projects />
        </section>
    )
}
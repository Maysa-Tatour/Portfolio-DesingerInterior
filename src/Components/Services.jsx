import { LuSofa } from "react-icons/lu";
import { SiOpen3D } from "react-icons/si";
import { FaHandshake } from "react-icons/fa6";
import Testimonials from "./Testimonials";
const services = [
  {
    icon:LuSofa,
    title: "Interior Design",
    desc: "Modern and elegant interior solutions tailored to your lifestyle.",
  },
  {
   icon:FaHandshake,
    title: "Space Planning",
    desc: "Smart layouts that maximize comfort and functionality.",
  },
  {
    icon:SiOpen3D,
    title: "3D Visualization",
    desc: "Realistic renders to preview your dream interior before execution.",
  },
];
export default function Services() {
    return (
        <section className="px-6 py-20 bg-[#09233C]">
            <div className="max-w-7xl mx-auto">
             
              <p className="text-pink-300 uppercase text-md text-center tracking-wider mb-5">Services</p>
              <p className="text-[#F8F7F6] text-5xl font-bold mb-10 text-center">What I Offer</p>
                <div className="flex sm:flex-row sm:justify-between flex-col gap-10">
                {services.map((services,i) => {
                    const Icon=services.icon;
                  return (
                    <div key={i} className="border border-[#F8F7F6] rounded-[10px] shadow-xl flex items-center px-6">
                         <div className="w-14 h-14 rounded-full flex items-center justify-center bg-pink-300 shrink-0">
                          <Icon size={30} className="text-[#09233C]" />
                         </div>
                        <div className="flex flex-col items-center justify-center gap-2 py-4 px-2">
                        <h3 className="text-[#F8F7F6] text-2xl sm:text-3xl font-bold ">{services.title}</h3>
                        <p className="text-[#F8F7F6] text-center text-lg">{services.desc}</p>
                        </div>
                       </div>    
                  )
                  
                  })}
                           
           </div>
          <Testimonials />
         </div>
        
        </section>
    )
}
import {FaArrowRight} from "react-icons/fa";
const projects=[
    {
     img:"/img/interior-3.jpg",
     title:"Modern Living Room"

    },
    {
     img:"/img/interior-4.jpg",
     title:"Elegant Lounge Design" 
    },
    {
     img:"/img/interior-5.jpg",
     title:"Cozy Family Space."
    },
    {
     img:"/img/interior-6.jpg",
     title:"Luxury Comfort Space."
    },
    {
     img:"/img/interior-7.jpg",
     title:"Warm & Inviting Interior."
    },
]
export default function Projects() {
    return (
        <>
        
        <div className="  w-full sm:max-w-7xl sm:mx-auto">
            <hr className="text-[#0B1C3D] mb-10"></hr>
        <div className="flex flex-col md:flex-row  justify-between items-start md:items-center gap-4">
            <h3 className="text-gray-700 text-4xl font-bold"><span className="text-pink-500 text-sm">My Projects</span><br/>Latest Works </h3>
            <div>
                <button className="border border-pink-500 rounded-full px-6 py-3 flex items-center gap-2 hover:bg-pink-300 transition">
                    View All Projects <FaArrowRight/>
                </button>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-6 mt-10">
                {projects.map((pro,i)=> (
                    <div key={i} className="  w-full">
                        <div className="relative overflow-hidden rounded-xl group">
                        <img src={pro.img} alt="design-${i+1}" className="rounded-xl  aspect-[4/3]  object-cover w-full group-hover:scale-110 transition duration-500 " />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center ">
                          <button className="bg-white text-black px-5 py-2 rounded-full font-medium">Interior Design</button>
                        </div>
                        </div>
                        <p className="font-semibold mt-3 text-[#09233C]">{pro.title}</p>
                    </div>
                      
                ))}
           </div> 
        </div>
        </>
    )
}
import {FaBars,FaTimes} from "react-icons/fa";
import {useState} from "react";
export default function Navbar()

{
    const [menuOpen,setMenuOpen] = useState(false);
    return (
        <nav className="flex justify-between items-center px-6 md:px-10  py-6 text-white relative">
            {/*Logo */}
            <h1 className="text-xl font-bold">
                Luna <span className="text-pink-300">Ardent</span>
            </h1>

            {/*Links */}
            <div className="space-x-8 hidden md:flex">
                <a href="#" className="hover:text-pink-300">Home</a>
                <a href="#" className="hover:text-pink-300">About</a>
                <a href="#" className="hover:text-pink-300">Projects</a>
                <a href="#" className="hover:text-pink-300">Services</a>
                <a href="#" className="hover:text-pink-300">Contact</a>
            </div>

            {/* Button */}
            <button className= " hidden md:block bg-pink-300 text-black px-5 py-2 rounded-full hover:scale-105 transition">
                Let's Talk
            </button>
            {/* Mobile Menu Button */}
            <button className="md:hidden z-50 text-2xl"
                    onClick={()=>setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes/>:<FaBars />}
                    </button>
                    {/*Mobile Menu */}
                    <div className={`absolute top-20 right-6  w-[220px] rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-6 flex flex-col items-center justify-center gap-8 text-xl transition-all duration-300 md:hidden 
                      ${menuOpen ? "opacity-100 visible":"opacity-0 invisible" } `}>
                        <a className="hover:text-pink-300 transition duration-300 hover:translate-x-1 " href="#" onClick={()=>setMenuOpen(false)}>Home</a>
                        <a href="#" onClick={()=>setMenuOpen(false)}>About</a>
                        <a href="#" onClick={()=>setMenuOpen(false)}>Projects</a>
                        <a href="#" onClick={()=>setMenuOpen(false)}>Services</a>
                        <a href="#" onClick={()=>setMenuOpen(false)}>Contact</a>
                        <button className="bg-pink-300 text-black px-5 py-2 rounded-full">
                            Let's Talk
                        </button>
                      </div>
        </nav>
    )
}
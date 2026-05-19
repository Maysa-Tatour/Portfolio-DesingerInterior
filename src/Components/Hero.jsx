import Navbar from "./Navbar";

export default function Hero(){
    return (

        <section className="relative bg-gradient-to-r from-[#0b1c3d] to-[#132d5b] text-white overflow-hidden">
            {/*Import navbar function */}
            <Navbar/>
          {/* section Hero  */}
           <div className=" w-full sm:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_350px_300px] place-items-center lg:items-center  lg:gap-16 gap-10  sm:py-20 py-16 px-10 ">
            {/*img */}
            <div className=" w-full sm:max-w-[420px] h-[420px] overflow-hidden rounded-2xl  ">
                <img src="/img/luna.jpg" alt="luna"  className="w-full h-full object-cover" />
                </div> 
            
              
            {/* Contant */}
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left  ">
                <span className="text-sm uppercase text-[#F8CDD1]">hello,i'm</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mt-2">
                    Luna <span className="text-[#F8CDD1]">Ardent</span>
                </h1>
                <p className="mt-2 text-xl">Interior Designer</p>
                <p className="mt-4 mb-4 text-gray-300 max-w-md text-lg">I create modern and functional interior spaces that reflect your personality and enhance your everyday living. </p>
                <button className="bg-[#F8CDD1] text-[#08223B] w-[149px] h-[36px] text-center rounded-full shadow-xl cursor-pointer hover:scale-105 transition duration-300">View My Work</button>
            </div>
            {/* img */}
            <div className=" w-full max-w-[300px] h-[380px] sm:[430px] rounded-t-[200px]  overflow-hidden relative lg:translate-y-[-40px]">
                <img src="/img/interior-5.jpg" alt="design-1" className="w-full h-full object-cover" />
                
            </div>
           </div>
        </section>

    )
}
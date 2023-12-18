
import Image from 'next/image';

const MainSection = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-400 relative flex items-center justify-center overflow-hidden z-50">
     
      <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            
            <div className="relative">
                <div className="lg:max-w-xl lg:pr-5 relative z-40">
                    <p className="flex text-sm uppercase text-g1">
                        Jornada Tech
                    </p>
                    <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                        Guia Definitivo
                        <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">Programador</span>
                    </h2>
                    <p className=" text-xl text-gray-700">do zero ao avançado</p>
                    <div className="mt-10 flex flex-col items-center md:flex-row">
                        <a href="#courseinfo" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-slate-900 px-6 font-medium tracking-wide text-white shadow-md hover:shadow-lg transition hover:bg-teal-500 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                            Sobre
                        </a>
                        <a href="#firstclass" aria-label="" className="group inline-flex items-center font-semibold text-g1 hover:text-g4">
                            Primeira Aula Grátis
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                </svg>
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none h-4/6 hover:scale-105 transition-transform">
                    <img src="/me.png"></img>
                </div>
            </div>
        </div>
      </div> 
 
    </div>
  );
};


export default MainSection;

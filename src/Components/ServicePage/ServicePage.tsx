import React from 'react'
import Footer from '../Landing_page/Footer/Footer';
import NavbarBa from '../Navbar/Navbar'
import './Service.css'
import Chat from '../Landing_page/Chat/Chat';
export default function ServicePage() {
 
  return (
    <div className='servicePerent '>
    <div className='serviceContainer relative '>
      <div className='serviceImg'>
        <div className="navbarv">
        <NavbarBa />
        </div>
        <div className='flex justify-center text-4xl pt-[150px] md:pt-0 underline text-white font-about  md:mt-[150px]'>
              Services
              </div>
        
      </div>
      <div className="w-full shadow-xl drop-shadow-2xl shadow-slate-800 h-7 -mt-[29px] "></div>
      <div className="servicecontents flex justify-center flex-col  items-center mt-6 ">
        <div >
          <h1 className='text-4xl text-yellow-500 font-about'>OUR SERVICES</h1>
        </div>
        <div className='md:ml-[10px] ml-[40px]'>
          <h1 className='md:text-3xl font-slab font-bold text-lg  '>
          Travel With The Best Experience
          </h1>
          <p className='text-lg  md:w-[450px] w-[300px] '>Lorem ipsum dolor sit consectetur adipiscing elit,r incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="serviceSrcoll md:h-[350px]  mt-8 flex md:flex-row  flex-col justify-evenly ml-6 md:ml-0 gap-4 md:gap-0">
        <div className="divfigure w-[350px] h-[300px] drop-shadow-lg shadow-2xl items-center ">
          <div className='flex flex-col justify-center items-center'>
          <div>
          <img className='transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110' src={require('../../Assets/service1.png')} alt="" />
          </div>
          <div>
          <h1 className='font-about font-bold text-2xl underline '>Mountain Trip</h1>
          </div>
         <p className='w-[250px]'>Lorem  dolor sit amet, consectetur adipiscing elit,r incididunt ut labore et dolore magnipsum  magna aliqua</p>
         <button className='w-1/3 h-9 bg-yellow-300 mt-4 drop-shadow-lg font-slab font-bold'>Learn More</button>
          </div>
          
        </div>
        <div className="divfigure w-[350px] h-[300px] drop-shadow-lg shadow-2xl items-center ">
          <div className='flex flex-col justify-center items-center'>
          <div>
          <img className='mt-6 transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110 ' src={require('../../Assets/service2.png')} alt="" />
          </div>
          <div>
          <h1 className='font-about font-bold text-2xl underline  '>Camping</h1>
          </div>
         <p className='w-[250px]'>Lorem  dolor sit amet, consectetur adipiscing elit,r incididunt ut labore et dolore magnipsum  magna aliqua</p>
         <button className='w-1/3 h-9 bg-yellow-300 mt-4 drop-shadow-lg font-slab font-bold'>Learn More</button>
          </div>
          
        </div>
        <div className="divfigure w-[350px] h-[300px] drop-shadow-lg shadow-2xl items-center">
          <div className='flex flex-col justify-center items-center'>
          <div>
          <img className='transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110' src={require('../../Assets/service3.png')} alt="" />
          </div>
          <div>
          <h1 className='font-about font-bold text-2xl underline '>River Rafting</h1>
          </div>
         <p className='w-[250px]'>Lorem  dolor sit amet, consectetur adipiscing elit,r incididunt ut labore et dolore magnipsum  magna aliqua</p>
         <button className='w-1/3 h-9 bg-yellow-300 mt-4 drop-shadow-lg font-slab font-bold'>Learn More</button>
          </div>
        </div>
        
      </div>
      <div className="serviceSrcoll md:h-[350px]  mt-8 flex md:flex-row flex-col justify-evenly ml-6 md:ml-0  gap-4 md:gap-0">
        <div className="divfigure w-[350px] h-[300px] drop-shadow-lg shadow-2xl items-center">
          <div className='flex flex-col justify-center items-center'>
          <div>
          <img className='transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110' src={require('../../Assets/service4.png')} alt="" />
          </div>
          <div>
          <h1 className='font-about font-bold text-2xl underline '>Surfing Spots</h1>
          </div>
         <p className='w-[250px]'>Lorem  dolor sit amet, consectetur adipiscing elit,r incididunt ut labore et dolore magnipsum  magna aliqua</p>
         <button className='w-1/3 h-9 bg-yellow-300 mt-4 drop-shadow-lg font-slab font-bold'>Learn More</button>
          </div>
          
        </div>
        <div className="divfigure w-[350px] h-[300px] drop-shadow-lg shadow-2xl items-center ">
          <div className='flex flex-col justify-center items-center'>
          <div>
          <img className=' transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110' src={require('../../Assets/service5.png')} alt="" />
          </div>
          <div>
          <h1 className='font-about font-bold text-2xl underline  '>Diving Spots</h1>
          </div>
         <p className='w-[250px]'>Lorem  dolor sit amet, consectetur adipiscing elit,r incididunt ut labore et dolore magnipsum  magna aliqua</p>
         <button className='w-1/3 h-9 bg-yellow-300 mt-4 drop-shadow-lg font-slab font-bold'>Learn More</button>
          </div>
          
        </div>
        <div className="divfigure w-[350px] h-[300px] drop-shadow-lg shadow-2xl items-center">
          <div className='flex flex-col justify-center items-center'>
          <div>
          <img className='transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110' src={require('../../Assets/service6.png')} alt="" />
          </div>
          <div>
          <h1 className='font-about font-bold text-2xl underline '>City Tour</h1>
          </div>
         <p className='w-[250px]'>Lorem  dolor sit amet, consectetur adipiscing elit,r incididunt ut labore et dolore magnipsum  magna aliqua</p>
         <button className='w-1/3 h-9 bg-yellow-300 mt-4 drop-shadow-lg font-slab font-bold'>Learn More</button>
          </div>
          
        </div>
        
      </div>

    </div>
    <Footer/>
    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
        <Chat/>
   </div>
</div>
    </div>
  )
}

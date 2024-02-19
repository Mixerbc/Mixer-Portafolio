import React from "react";
import {Card, CardBody} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import git from "../images/gitpix.png"
import linkedin from '../images/link.png'
import cv from '../images/cv.avif'
import '../App.css';


export default function App() {
  return (
    <div className="inline-block max-md:flex  max-md:flex-col  max-md:items-center ">

      <h1 className='relative flex max-md:inline-block   '>
        <span className=" text-white font-semibold text-7xl rounded-xl max-sm:ml-4 max-h-screen  bg-purple-950  px-4   bg-opacity-40 max-sm:text-4xl max-sm:right-4  max-md:text-xl max-md:relative  max-md:top-10 max-sm:top-20 p-0   ">   Mixer Bastidas</span>
        <div  className="flex gap-8 relative items-center ml-2 max-sm:ml-8 max-md:size-52  max-md:gap-5 max-md:pt-4 z-0 mt-2">
      <a href="https://github.com/Mixerbc">
         <Avatar className="xl:hover:translate-y-[-1rem] transition-all
        
        
        " isBordered size="lg" color="danger" src={git} />
        </a>  
     <a href="https://www.linkedin.com/in/mixerbastidas/">
      <Avatar className="xl:hover:translate-y-[-1rem] transition-all"   isBordered size="lg" color="primary" src={linkedin} />
      </a> 
   <a href="https://docs.google.com/document/d/116NQ8Snq8T_Jq_VWI3GKheg1hrWrfM2_shiLjDUxdO8/edit?usp=sharing"><Avatar className="xl:hover:translate-y-[-1rem] transition-all"  isBordered  size="lg" color="secondary" src={cv} />
    </a>  
   
    </div>

      </h1>
<br />
  
      <Card className="border-hidden px-5 py-2 opacity-100 bg-purple-950 bg-opacity-40 relative z-20 max-md:bottom-16">
        <p className="text-white text-3xl font-Comfortaa max-md:relative   z-20 max-md:text-xl max-md:text-center ">Soy desarrollador Fullstack apasionado al diseño y la programación</p>
      </Card>

    </div> 
  );
}

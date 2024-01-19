import React from "react";
import {Chip, Avatar} from "@nextui-org/react";
import css from '../images/css.png'
import js from '../images/js.png'
import boost from '../images/boost.png'
import mysql from '../images/mysql.png'
import tail from '../images/tail.png'
import react from '../images/react.png'
import php from '../images/php.png'
import node from '../images/node.png'
import next from '../images/next.png'
import html from '../images/html.png'

export default function App() {
  return (
    <div id="habil" className="flex justify-center flex-col text-center   text-white  text-5xl max-md:text-3xl    ">
        <div className="mb-5  p-2 max-md:mb-2  max-md:mt-5">
            <h1 className=" "> <span className="font-sans ">Habilidades</span></h1>
            </div>
        
    <div className="flex flex-col  gap-4 max-md:gap-3 justify-center items-center  ">
       

       <div className="gap-4 flex max-md:gap-1">

      <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-danger-500 to-purple-800 border-small border-white/50 shadow-purple-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center "><img src={html} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">HTML</p>
        </div> </Chip>    
        
        
      <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-orange-500 to-primary-400 border-small border-white/50 shadow-purpleq-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center "><img src={css} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">CSS</p>
        </div> </Chip>  
        
      <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-orange-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center "><img src={js} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">Javascript</p>
        </div> </Chip>  
        
      <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-cyan-950 to-pink-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center "><img src={php} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">PHP</p>
        </div> </Chip>  
        
      <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-lime-500 to-teal-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center "><img src={boost} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">Boostrap</p>
        </div> </Chip>  

        </div>
        
     <div className="flex gap-4 max-md:gap-1">


     <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-yellow-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center justify-items-center"><img src={node} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">Node.js</p>
        </div> </Chip>  
        
      <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center "><img src={next} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">NextUI</p>
        </div> </Chip>  
        
      <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-purple-900 to-indigo-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center "><img src={tail} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">Tailwind</p>
        </div> </Chip>  
             
      <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-default-900 to-cyan-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center "><img src={react} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">React</p>
        </div> </Chip>  
        <Chip  variant="shadow"   classNames={{
        base: "bg-gradient-to-br from-default-100 to-fuchsia-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
      > <div className="flex justify-center items-center "><img src={mysql} className="size-5 "  alt="" /> <p className="pl-1 font-semibold">MySQL</p>
        </div> </Chip>  
     </div>

    
     

        
    </div>
    
    </div>
  );
}

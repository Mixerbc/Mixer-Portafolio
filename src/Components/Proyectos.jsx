import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import tesla from '../images/tesla.png'
import safe from '../images/saferent.png'
import acdc from '../images/acdc.png'
import foodie from '../images/foodie.png'
import starbuck from '../images/starbuck.png'
export default function App() {
  return (

  <div id="pro" className="flex justify-center items-center flex-col text-center  pt-10  pb-16">
  
    <h1 className="  font-semibold   text-white text-5xl bg-opacity-60 rounded-lg p-5 bg-primary-600  max-w-70 max-sm:text-3xl">Proyectos</h1>
  
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-6  max-sm:justify-center">
    <Card className="col-span-12 sm:col-span-4 h-[300px] w-[270px]  max-sm:w-[350px] ">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={tesla}
      />
      <CardFooter className="absolute bg-primary-900/80 bottom-0 z-10 border-t-1 border-primary-700 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
        
          <div className="flex flex-col">
            <p className="text-white/80 text-md font-semibold" >Clon de Tesla</p>
            <p className="text-sm text-white/80">Modelos de autos</p>
          </div>
        </div>
     <a href="https://tesla-mixerlanding.netlify.app/">   <Button radius="full" color="primary" className="font-semibold text-black text-sm" size="sm">  Visitar  </Button> </a> 
      </CardFooter>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]  w-[270px] max-sm:w-[350px] "> 
     
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={safe}
        
      />
       <CardFooter className="absolute bg-warning-900/80 bottom-0 z-10 border-t-1 border-warning-700 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
        
          <div className="flex flex-col">
            <p className="text-white/80 text-md font-semibold" >Safe Home & Rent</p>
            <p className="text-sm text-white/80">Capturador de datos</p>
          </div>
        </div>
    <a href="https://safehomeandrent.netlify.app/">    <Button radius="full" color="warning"  className="font-semibold  text-sm" size="sm">  Visitar   </Button></a>
      </CardFooter>
    </Card>
    <Card className="col-span-12 sm:col-span-4  h-[300px]  w-[270px] max-sm:w-[350px]  ">
     
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={acdc}
      /> 
      <CardFooter className="absolute bg-teal-900/80 bottom-0 z-10 border-t-1 border-teal-700 dark:border-default-100">
      <div className="flex flex-grow gap-2 items-center">
      
        <div className="flex flex-col">
          <p className="text-white/80 text-md font-semibold" >AcDcTechnology</p>
          <p className="text-sm text-white/80">Página de destino boceto</p>
        </div>
      </div>
      <a href="https://acdcboceto.netlify.app/"> <Button radius="full" color="success"  className="font-semibold text-sm" size="sm">  Visitar   </Button></a>
    </CardFooter>
      
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">

      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={foodie}
      />
        <CardFooter className="absolute bg-danger-900/80 bottom-0 z-10 border-t-1 border-danger-700 dark:border-default-100">
      <div className="flex flex-grow gap-2 items-center">
      
        <div className="flex flex-col">
          <p className="text-white/80 text-md font-semibold">Foodie Comida Rapida</p>
          <p className="text-sm text-white/80">Reservacion y Menú</p>
        </div>
      </div>
      <a href="https://foodie-foodie-food.netlify.app/">   <Button radius="full" color="danger"  className="font-semibold text-black text-sm" size="sm">Visitar    </Button></a> 
    </CardFooter>
    
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={starbuck}
      />
         <CardFooter className="absolute bg-success-900/80 bottom-0 z-10 border-t-1 border-success-700 dark:border-default-100">
      <div className="flex flex-grow gap-2 items-center">
      
        <div className="flex flex-col">
          <p className="text-white/80 text-md font-semibold" >Starbucks</p>
          <p className="text-sm text-white/80">Diseño dinámico</p>
        </div>
      </div>
    <a href="https://starbuckscustom.netlify.app/">  <Button radius="full" color="success"  className="font-semibold text-sm" size="sm">  Visitar   </Button></a>
    </CardFooter>
    
    </Card>
  </div>
  </div>
  );
}

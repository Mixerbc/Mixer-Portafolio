import React from "react";
import { CardBody, Card, CardFooter,  Image} from "@nextui-org/react";
import cita from '../images/cita.png';
import carrito from '../images/carrito.png';
import cotizador from '../images/cotizador.png';
import gasto from '../images/gasto.png';

export default function App() {
 

  return ( 
 <div className="flex flex-col text-center  items-center pt-7 pb-10"> 
   
  <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 ">
 


  <a href="https://mixerbc.github.io/Cotizador-De-Seguro-de-Automoviles/"> <Card shadow="sm" className="max-md:w-56 max-sm:w-40
  w-64"    >
          <CardBody className="overflow-visible p-0 ">
            <Image
              shadow="sm"
              radius="md"
              width="[180px]"   
              className="w-full object-cover h-[140px] "
              src={cotizador}
            />
          </CardBody>
          <CardFooter className="bg-success-300 text-md justify-center">
            <b>Cotizador de autos</b>
          </CardFooter>
        </Card></a>
      <a href="https://mixerbc.github.io/Gasto-Semanales/"> <Card shadow="sm "  className="max-md:w-56  w-64 max-sm:w-40 max-sm:h-52 "    >
          <CardBody className="overflow-visible p-0"  >
            <Image
              shadow="sm"
              radius="md"
              width="100%"
              className="w-full object-cover h-[140px] max-sm:h-[160px] "
              src={gasto}
            />
          </CardBody>
          <CardFooter  className=" bg-primary-300   text-md justify-center">
            <b>Gasto Semanal</b>
          </CardFooter>
        </Card></a>
     <a href="https://mixerbc.github.io/Administrar-Citas/">  <Card shadow="sm"  className="max-md:w-56    w-64 max-sm:w-40"  >
          <CardBody className="overflow-visible p-0"  >
            <Image
              shadow="sm"
              radius="md"
              width="100%"
              className="w-full object-cover h-[140px]"
              src={cita}
            />
          </CardBody>
          <CardFooter className="bg-secondary-300 text-md justify-center">
            <b>Administrador de citas</b>
          </CardFooter>
        </Card ></a> 
   <a href="https://mixerbc.github.io/Proyecto-Carrito/">  <Card shadow="sm" className="max-md:w-56  max-sm:w-40 w-64"   >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="md"
              width="100%"
              className="w-full object-cover h-[140px]"
              src={carrito}
            />
          </CardBody>
          <CardFooter className=" bg-amber-300 text-md justify-center" >
            <b className="">Carrito de compra</b>
          </CardFooter>
        </Card></a>
        



</div>
  </div>
  

  
    
  );
}

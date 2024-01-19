import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function App() {
  return (
    <Navbar className="bg-purple-900 bg-opacity-5  ">
      <NavbarBrand>
       
        
      </NavbarBrand>
      <NavbarContent className="  sm:flex gap-7" justify="center">
        <NavbarItem>
          <Link className=" text-white font-semibold text-xl " href="#">
          Inicio
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link  className=" text-xl text-white font-semibold " href="#habil" aria-current="page">
         Habilidades
          </Link>



          
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-semibold  text-xl" href="#pro">
            Proyectos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
         
        </NavbarItem>
        <NavbarItem>
          
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

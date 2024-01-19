import React, { useState } from 'react';
import Copia from '../images/copia.png';

export default function Contacto() {
  const [form, setForm] = useState({
    input: "mixerbastidascontasti@gmail.com"
  });

  const copiarpapeles = () => {
    let aux = document.querySelector(".input");
    aux.select();
    document.execCommand("copy");
    alert("Se ha copiado al portapapeles");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <div className='text-center items-center flex flex-col justify-center mb-10'>
      <h1 className='text-5xl text-white bg-success-600 max-w-72 mb-4 bg-opacity-60 rounded-lg p-3'>
        Contactame
      </h1>

      <div className='flex text-center items-center'>
        <input
          name='input'
          type="text"
          className='ml-10 w-80 text-xl p-2 rounded-lg input border-none'
          value={form.input}
          onChange={handleInputChange}
        />
        <span onClick={copiarpapeles} className='cursor-pointer'>
          <img className='size-8' src={Copia} alt="" />
        </span>
      </div>
    </div>
  );
}
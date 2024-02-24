import React, { useState } from 'react';

// Importamos imágenes
import OIG5 from '../assets/image/OIG4.jpg';
import OIG5 from '../assets/image/OIG5.jpg';
import OIG6 from '../assets/image/OIG6.jpg';
import OIG9 from '../assets/image/OIG9.jpg';


// Almacenar las imágenes en un array
export const PrimerComponente = () => {
  const animales = [
    { id: 1, nombre: 'Bichito', imagen: OIG4 },
    { id: 2, nombre: 'Hipogrifo', imagen: OIG5 },
    { id: 3, nombre: 'Unicornio', imagen: OIG6 },
    { id: 4, nombre: 'Sirena', imagen: OIG9 },
  ];


  const [seleccionado, setSeleccionado] = useState(animales[0]);
  const [color, setColor] = useState('');

  const handleSelectChange = (e) => {
    const id = parseInt(e.target.value, 10);
    const seleccion = animales.find((animal) => animal.id === id);
    setSeleccionado(seleccion);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h1>Animales fantásticos</h1>
      <div>
        <label htmlFor="animaleselect">Selecciona un animal:</label>
        <select id="animaleselect" onChange={handleSelectChange} value={seleccionado.id}>
          {animales.map((animal) => (
            <option key={animal.id} value={animal.id}>
              {animal.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="colorInput">Selecciona un color:</label>
        <input
          type="color"
          id="colorInput"
          onChange={handleColorChange}
          value={color}
        />
      </div>
      <div>
        <h2>{seleccionado.nombre}</h2>
        <img
          src={seleccionado.imagen}
          alt={seleccionado.nombre}
          style={{ border: `5px solid ${color}`, width: '100vh', height: '90vh' }}
        />
      </div>
    </div>
  );
};

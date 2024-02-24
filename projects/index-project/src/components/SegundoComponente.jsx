import React, { useState } from 'react';

import OIG1 from '../assets/image/OIG1.jpeg';
import OIG2 from '../assets/image/OIG2.jpeg';
import OIG3 from '../assets/image/OIG3.jpeg';

export const SegundoComponente = () => {
  const monstruos = [
    { id: 1, nombre: 'Dragón', imagen: OIG1 },
    { id: 2, nombre: 'Dragones', imagen: OIG2 },
    { id: 3, nombre: 'Monstruo de las cavernas', imagen: OIG3 },
  ];

  const [seleccionado, setSeleccionado] = useState(monstruos[0]);
  const [color, setColor] = useState('');

  const handleSelectChange = (e) => {
    const id = parseInt(e.target.value, 10);
    const seleccion = monstruos.find((monstruo) => monstruo.id === id);
    setSeleccionado(seleccion);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h1>Monstruos</h1>
      <div>
        <label htmlFor="monstruoSelect">Selecciona un monstruo:</label>
        <select id="monstruoSelect" onChange={handleSelectChange} value={seleccionado.id}>
          {monstruos.map((monstruo) => (
            <option key={monstruo.id} value={monstruo.id}>
              {monstruo.nombre}
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
          style={{ border: `5px solid ${color}` }}
        />
      </div>
    </div>
  );
};

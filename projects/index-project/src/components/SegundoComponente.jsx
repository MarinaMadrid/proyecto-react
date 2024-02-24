import React, { useState } from 'react';

// Importamos imágenes
import OIG1 from '../assets/image/OIG1.jpeg';
import OIG2 from '../assets/image/OIG2.jpeg';
import OIG3 from '../assets/image/OIG3.jpeg';

// Componente que muestra una lista de monstruos con la posibilidad de seleccionar uno y cambiar su color
export const SegundoComponente = () => {
  // Array de monstruos con sus datos, incluyendo id, nombre, e imagen
  const monstruos = [
    { id: 1, nombre: 'Dragón', imagen: OIG1 },
    { id: 2, nombre: 'Dragones', imagen: OIG2 },
    { id: 3, nombre: 'Monstruo_cavernas', imagen: OIG3 },
  ];

  // Estados para almacenar el monstruo seleccionado y el color elegido
  const [seleccionado, setSeleccionado] = useState(monstruos[0]); //Por defecto el 1º - Dragón
  const [color, setColor] = useState('');                         //Por defecto sin color

  // Manejador de cambio para el select de monstruos
  const handleSelectChange = (e) => {
    const id = parseInt(e.target.value, 10);
    const seleccion = monstruos.find((monstruo) => monstruo.id === id);
    setSeleccionado(seleccion);
  };

  // Manejador de cambio para el input de color
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Renderizado del componente
  return (
    <div>
      <h1>Monstruos</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Columna para el select y el input de color */}
        <div style={{ marginRight: '20px' }}>
          {/* Selección de monstruo mediante un select */}
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
          <br />
          {/* Selección de color mediante un input de tipo color */}
          <div>
            <label htmlFor="colorInput">Selecciona un color:</label>
            <input
              type="color"
              id="colorInput"
              onChange={handleColorChange}
              value={color}
            />
          </div>
        </div>
        {/* Visualización del monstruo seleccionado con el color elegido */}
        <div>
          <h2>{seleccionado.nombre}</h2>
          <img
            src={seleccionado.imagen}
            alt={seleccionado.nombre}
            style={{ border: `5px solid ${color}`, width: '100vh', height: '90vh' }}
          />
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

export const SegundoComponente = () => {
  const monstruos = [
    { id: 1, nombre: 'Godzilla', imagen: 'godzilla.jpg' },
    { id: 2, nombre: 'Drácula', imagen: 'dracula.jpg' },
    { id: 3, nombre: 'Frankenstein', imagen: 'frankenstein.jpg' },
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
      <h1>Monstruos App - SegundoComponente</h1>
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
          src={require(`./assets/${seleccionado.imagen}`).default}
          alt={seleccionado.nombre}
          style={{ border: `5px solid ${color}` }}
        />
      </div>
    </div>
  );
};

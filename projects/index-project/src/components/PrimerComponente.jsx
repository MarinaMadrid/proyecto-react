import React, { useState } from 'react';

// Importamos imágenes
import OIG4 from '../assets/image/OIG4.jpeg';
import OIG5 from '../assets/image/OIG5.jpg';
import OIG6 from '../assets/image/OIG6.jpg';
import OIG9 from '../assets/image/OIG9.jpeg';
import OIG10 from '../assets/image/OIG12.jpeg';

// Almacenar las imágenes en un array
export const PrimerComponente = () => {
  const animales = [
    { id: 1, nombre: 'Bichito', imagen: OIG4 },
    { id: 2, nombre: 'Hipogrifo', imagen: OIG5 },
    { id: 3, nombre: 'Unicornio', imagen: OIG6 },
    { id: 4, nombre: 'Sirena', imagen: OIG9 },
    { id: 5, nombre: 'Caballito_de_mar', imagen: OIG10 },
    { id: 6, nombre: 'No_hay_imagen', imagen: OIG11 },
  ];

  // Estados para almacenar el animal seleccionado, el color elegido y el nombre introducido
  const [seleccionado, setSeleccionado] = useState('');
  const [color, setColor] = useState('');
  const [nombreInput, setNombreInput] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  // Manejador de cambio para el input de nombre
  const handleNombreInputChange = (e) => {
    const nombre = e.target.value;
    setNombreInput(nombre);

    // Buscar el animal por nombre
    const seleccion = animales.find((animal) => animal.nombre.toLowerCase() === nombre.toLowerCase());

    if (seleccion) {
      setSeleccionado(seleccion);
      setMensajeError('');
    } else {
      setMensajeError('¡Este animal no está disponible!');
    }
  };

  // Manejador de cambio para el input de color
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Renderizado del componente
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Animales fantásticos</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Columna para el input de nombre y el input de color */}
        <div style={{ marginRight: '20px', textAlign: 'center' }}>
          {/* Input para introducir el nombre del animal */}
          <div>
            <label htmlFor="nombreInput">Introduce el nombre del animal:</label>
            <input
              type="text"
              id="nombreInput"
              onChange={handleNombreInputChange}
              value={nombreInput}
            />
            {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
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
          <br />
          {/* Cuadro con los nombres disponibles */}
          <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '5px', textAlign: 'left' }}>
            <h3 style={{ textAlign: 'center' }}>Nombres disponibles:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {animales.map((animal) => (
                <li key={animal.id}>{animal.nombre}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Visualización del animal seleccionado con el color elegido */}
        <div style={{ textAlign: 'center' }}>
          <h2>{seleccionado.nombre}</h2>
          <img
            src={seleccionado.imagen}
            alt={seleccionado.nombre}
            style={{
              boxShadow: `0 0 30px ${color}`,
              width: '100vh',
              height: '90vh',
            }}
          />
        </div>
      </div>
    </div>
  );
};

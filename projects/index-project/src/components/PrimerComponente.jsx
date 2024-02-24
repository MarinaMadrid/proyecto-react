import React, { useState } from 'react';

// Importamos imágenes
import OIG4 from '../assets/image/OIG4.jpeg';
import OIG5 from '../assets/image/OIG5.jpg';
import OIG6 from '../assets/image/OIG6.jpg';
import OIG9 from '../assets/image/OIG9.jpeg';
import OIG10 from '../assets/image/OIG10.jpg';
import OIG12 from '../assets/image/OIG12.jpeg';
import OIG13 from '../assets/image/OIG13.jpg';

// Almacenar las imágenes en un array
export const PrimerComponente = () => {
  const animales = [
    { id: 0, nombre: 'No hay imagen', imagen: OIG12 },
    { id: 1, nombre: 'Bichito', imagen: OIG4 },
    { id: 2, nombre: 'Hipogrifo', imagen: OIG5 },
    { id: 3, nombre: 'Unicornio', imagen: OIG6 },
    { id: 4, nombre: 'Sirena', imagen: OIG9 },
    { id: 5, nombre: 'Caballito de mar', imagen: OIG10 },
    { id: 6, nombre: 'Medusa', imagen: OIG13 },
  ];

  // Excluyendo la opción con la id 1 de los nombres disponibles
  const nombresDisponibles = animales
    .filter((animal) => animal.id !== 0)
    .map((animal) => animal.nombre.toLowerCase());

  // Estados para almacenar el animal seleccionado, el color elegido y el nombre introducido
  const [seleccionado, setSeleccionado] = useState(animales[0]);
  const [color, setColor] = useState('');
  const [nombreInput, setNombreInput] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  // Función para capitalizar la primera letra
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Manejador de cambio para el input de nombre
  const handleNombreInputChange = (e) => {
    const nombre = e.target.value.toLowerCase(); // Convertir a minúsculas para hacer la comparación más flexible
    setNombreInput(nombre);

    // Buscar el animal por nombre
    const seleccion = animales.find((animal) => animal.nombre.toLowerCase() === nombre);

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
          {/* Cuadro con los nombres disponibles (sin la opción con id 1) */}
          <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '5px', textAlign: 'left' }}>
            <h3 style={{ textAlign: 'center' }}>Nombres disponibles:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {nombresDisponibles.map((nombre) => (
                <li key={nombre}>{capitalizeFirstLetter(nombre)}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Visualización del animal seleccionado con el color elegido */}
        <div>
          <h1>Animales fantásticos</h1>
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

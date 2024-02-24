import React, { useState } from 'react';

// Importamos imágenes
import OIG1 from '../assets/image/OIG1.jpeg';
import OIG2 from '../assets/image/OIG2.jpeg';
import OIG3 from '../assets/image/OIG3.jpeg';
import OIG11 from '../assets/image/OIG11.jpeg'; // Opción por defecto
import OIG14 from '../assets/image/OIG14.jpeg';
import OIG15 from '../assets/image/OIG15.jpeg';
import OIG16 from '../assets/image/OIG16.jpeg';

// Componente que muestra una lista de monstruos con la posibilidad de seleccionar uno y cambiar su color
export const SegundoComponente = () => {
  // Array de monstruos con sus datos, incluyendo id, nombre, e imagen
  const monstruos = [
    { id: 0, nombre: 'Selecciona una imagen', imagen: OIG11 }, // Opción por defecto
    { id: 1, nombre: 'Dragón', imagen: OIG1 },
    { id: 2, nombre: 'Dragones', imagen: OIG2 },
    { id: 3, nombre: 'Monstruo de las cavernas', imagen: OIG3 },
    { id: 4, nombre: 'Dragón perrito', imagen: OIG14 },
    { id: 5, nombre: 'Dragón pájaro', imagen: OIG15 },
    { id: 6, nombre: 'Dinosaurio plumero', imagen: OIG16 },
  ];

  // Estados para almacenar el monstruo seleccionado y el color elegido
  const [seleccionado, modificarSeleccion] = useState(monstruos[0]); // Por defecto la opción "Selecciona una imagen"
  const [color, modificarColor] = useState(''); // Por defecto sin color

  // Manejador de cambio para el select de monstruos
  const elementoSeleccionado = (e) => {
    const id = parseInt(e.target.value, 10);  //Captura el valor del id de la imagen y lo convierte en entero
    const seleccion = monstruos.find((monstruo) => monstruo.id === id);  //Busca entre el array y lo guarda
    modificarSeleccion(seleccion);    //Lo manda a la función modificar para que se quede mostrada
  };

  // Manejador de cambio para el input de color
  const colorSeleccionado = (e) => {
    modificarColor(e.target.value);  //Coge del value el color seleccionado
  };

  // Renderizado del componente
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>  {/* Centramos */}
        <div style={{ marginRight: '20px' }}>
          {/* Selección de monstruo mediante un select */}
          <div>
            <label htmlFor="monstruoSelect">Selecciona un monstruo:</label>
            <select id="monstruoSelect" onChange={elementoSeleccionado} value={seleccionado.id}> {/* onChange -> Ejecutamos cuando hay cambios y value guarda el id del seleccionado */}
              {/* Realiza con map una búsqueda y selecciona el monstruo elegido que contenga la id y lo almacena en el value para mostrar */}
              {monstruos.map((monstruo) => (  
                <option key={monstruo.id} value={monstruo.id}>
                  {monstruo.nombre} {/* Nombre del mosntruo que muestra */}
                </option>
              ))}
            </select>
          </div>
          <br />
          {/* Selección de color mediante un input de tipo color */}
          <div>
            <label htmlFor="colorInput">Selecciona un color:  </label>
            <input type="color" id="colorInput" onChange={colorSeleccionado} value={color} />  {/* onChange -> Ejecuta la función al haber un cambio y value almacena el color seleccionado */}
          </div>
        </div>
        {/* Visualización del monstruo seleccionado con el color elegido */}
        <div> 
          <h1>Monstruos</h1>
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

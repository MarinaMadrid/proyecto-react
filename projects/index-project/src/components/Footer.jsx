import React from 'react';

// Función para barajar un array (usando el algoritmo de Fisher-Yates)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Footer = () => {
  const nombres = ['Adrián', 'Marina', 'Ale'];
  const nombresAleatorios = shuffleArray([...nombres]);

  return (
    <footer style={{ textAlign: 'center' }}>
      <p>Creado por: {nombresAleatorios.join(', ')}</p>
    </footer>
  );
};

export default Footer;

import { useState } from 'react';
import './AppMenu.css';
import { SegundoComponente } from './components/SegundoComponente';
import { PrimerComponente } from './components/PrimerComponente';
import OIG6 from './assets/image/OIG6.jpg';
import OIG15 from './assets/image/OIG15.jpeg';

function App() {
  const [paginaActual, setPaginaActual] = useState('menu');

  const irAPrimerComponente = () => setPaginaActual('primerComponente');
  const irASegundoComponente = () => setPaginaActual('segundoComponente');
  const irAlMenu = () => setPaginaActual('menu');

  return (
    <div>
      {paginaActual === 'menu' && (
        <div className="contenedorImagenes" style={{display: 'flex', height: '100vh', overflow: 'hidden'}} >
          {/* Imagen para ir al Primer Componente */}
          <img src={OIG6} alt="Ir a Primer Componente" onClick={irAPrimerComponente} className="imagenInteractiva" />

          {/* Imagen para ir al Segundo Componente */}
          <img src={OIG15} alt="Ir a Segundo Componente" onClick={irASegundoComponente} className="imagenInteractiva" />
        </div>
      )}
      {paginaActual === 'primerComponente' && <PrimerComponente irAlMenu={irAlMenu} />}
      {paginaActual === 'segundoComponente' && <SegundoComponente irAlMenu={irAlMenu} />}
    </div>
  );
}

export default App;

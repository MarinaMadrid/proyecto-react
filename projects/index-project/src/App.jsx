import { useState } from 'react';
import './App.css';
import { SegundoComponente } from './components/SegundoComponente';
import { PrimerComponente } from './components/PrimerComponente';

function App() {
  const [paginaActual, setPaginaActual] = useState('menu');

  const irAPrimerComponente = () => setPaginaActual('primerComponente');
  const irASegundoComponente = () => setPaginaActual('segundoComponente');
  const irAlMenu = () => setPaginaActual('menu');

  return (
    <div>
      {paginaActual === 'menu' && (
        <div>
          <button onClick={irAPrimerComponente}>Ir a Primer Componente</button>
          <button onClick={irASegundoComponente}>Ir a Segundo Componente</button>
        </div>
      )}
      {paginaActual === 'primerComponente' && <PrimerComponente irAlMenu={irAlMenu} />}
      {paginaActual === 'segundoComponente' && <SegundoComponente irAlMenu={irAlMenu} />}
    </div>
  );
}

export default App;

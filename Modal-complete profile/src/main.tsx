import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Asumiendo que existe un elemento con id "root" en el HTML generado por el entorno
const rootElement =
  document.getElementById('root') || document.createElement('div');
if (!rootElement.id) {
  rootElement.id = 'root';
  document.body.appendChild(rootElement);
}

ReactDOM.createRoot(rootElement).render(<App />);

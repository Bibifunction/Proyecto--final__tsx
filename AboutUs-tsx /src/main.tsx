
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Obtener el elemento raíz
const rootElement = document.getElementById('root');

// Asegurarse de que la fuente Atkinson Hyperlegible esté cargada
const loadFonts = () => {
  // Crear link para Google Fonts
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap';
  document.head.appendChild(link);
};

// Cargar fuentes
loadFonts();

// Renderizar la aplicación
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

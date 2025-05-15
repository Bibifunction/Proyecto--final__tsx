
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"

// Añadir un log para depuración
console.log("Iniciando la aplicación...")

// Standard React initialization for Vite
const container = document.getElementById("root")
if (container) {
  const root = createRoot(container)
  root.render(
    
      <App />
   
  )
} else {
  console.error("No se encontró el elemento root en el DOM")
}













import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// Añadimos un script para verificar que la regla CSS se aplique correctamente
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 576) {
    const yellowButton = document.querySelector(".button--yellow")
    if (yellowButton) {
      console.log("El botón amarillo está presente en móvil, verificando estilos...")
      const computedStyle = window.getComputedStyle(yellowButton)
      console.log("Display del botón:", computedStyle.display)
    } else {
      console.log("El botón amarillo no está en el DOM en móvil, lo cual es correcto.")
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




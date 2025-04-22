import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import CloseIcon from "./components/CloseIcon"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="app-container">
      {isModalOpen && (
        <div className="modal-container">
          <button onClick={handleCloseModal} className="close-button" aria-label="Cerrar">
            <CloseIcon />
          </button>

          <div className="modal-content">
            <p className="modal-text">
              Looks like your pup's profile isn't complete yet. Finish it to fetch all the fun!
            </p>

            <div className="button-container">
              <Button onClick={handleCloseModal}>Complete profile</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App



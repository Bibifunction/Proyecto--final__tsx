import { useCallback } from "react"
import Button from "../button/Button"
import "./ErrorPage.css"

interface ErrorPageProps {
  imageUrl?: string
  imageAlt?: string
  message?: string
  buttonText?: string
  buttonUrl?: string
}

function ErrorPage({
  imageUrl = "/src/assets/img.jpg",
  imageAlt = "404 - Confused dog with torn papers",
  message = "Oops! Looks like you've lost your paw.",
  buttonText = "Lead Me Home",
  buttonUrl = "/",
}: ErrorPageProps) {
  const handleNavigateHome = useCallback(() => {
    window.location.href = buttonUrl
  }, [buttonUrl])

  return (
    <div className="error-page">
      <div className="error-page__container">
        <div className="error-page__illustration">
          <img src={imageUrl || "/placeholder.svg"} alt={imageAlt} className="error-page__image" />
        </div>

        <p className="error-page__message">{message}</p>

        <Button text={buttonText} url={buttonUrl} onClick={handleNavigateHome} className="error-page__button" />
      </div>
    </div>
  )
}

export default ErrorPage


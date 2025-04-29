import "./Input.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input: React.FC<InputProps> = ({ label, id, error, className = "", ...props }) => {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input id={id} className={`input-field ${error ? "input-field--error" : ""} ${className}`} {...props} />
      {error && <span className="input-error">{error}</span>}
    </div>
  )
}

export default Input

import CheckIcon from "../../assets/check.svg"
import "./FilterOption.css"

interface FilterOptionProps {
  id: string
  label: string
}

const FilterOption = ({ id, label }: FilterOptionProps) => {
  return (
    <label className="filter__option">
      <input type="checkbox" className="filter__checkbox" id={id} />
      <span className="filter__checkbox-custom">
        <img src={CheckIcon || "/placeholder.svg"} alt="Seleccionado" className="filter__check" />
      </span>
      <span className="filter__label">{label}</span>
    </label>
  )
}

export default FilterOption

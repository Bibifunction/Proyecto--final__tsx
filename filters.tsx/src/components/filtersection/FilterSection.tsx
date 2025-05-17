import type React from "react"

import { useState } from "react"
import FilterOption from "../filteroption/FilterOption"
import ChevronUpIcon from "../../assets/chevron-up.svg"
import ChevronDownIcon from "../../assets/chevron-down.svg"
import "./FilterSection.css"

interface FilterOptionType {
  id: string
  label: string
}

interface FilterSectionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  options: FilterOptionType[]
  extendedOptions?: FilterOptionType[]
  hasMoreOptions?: boolean
}

const FilterSection = ({
  title,
  isOpen,
  onToggle,
  options,
  extendedOptions = [],
  hasMoreOptions = false,
}: FilterSectionProps) => {
  const [showExtendedOptions, setShowExtendedOptions] = useState(false)

  const toggleExtendedOptions = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowExtendedOptions(!showExtendedOptions)
  }

  return (
    <div className="filter">
      <div className={`filter__header ${isOpen ? "filter__header--open" : ""}`} onClick={onToggle}>
        <h3 className="filter__title">{title}</h3>
        <img
          src={isOpen ? ChevronUpIcon : ChevronDownIcon}
          alt={isOpen ? "Contraer" : "Expandir"}
          className="filter__chevron"
        />
      </div>
      <div className={`filter__content ${isOpen ? "filter__content--open" : ""}`}>
        {options.map((option) => (
          <FilterOption key={option.id} id={option.id} label={option.label} />
        ))}

        {hasMoreOptions && (
          <>
            <button
              className="filter__more"
              onClick={toggleExtendedOptions}
              style={{ display: showExtendedOptions ? "none" : "block" }}
            >
              + More
            </button>

            <div className="filter__extended-options" style={{ display: showExtendedOptions ? "block" : "none" }}>
              {extendedOptions.map((option) => (
                <FilterOption key={option.id} id={option.id} label={option.label} />
              ))}
              <button className="filter__less" onClick={toggleExtendedOptions}>
                — Less
              </button>
            </div>
          </>
        )}
      </div>
      <div className="filter__separator"></div>
    </div>
  )
}

export default FilterSection

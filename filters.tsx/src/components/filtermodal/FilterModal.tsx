import { useState } from "react"
import FilterSection from "../filtersection/FilterSection"
import DateFilterSection from "../datefiltersection/DateFilterSection"
import CloseThickIcon from "../../assets/close-thick.svg"
import "./FilterModal.css"

const FilterModal = () => {
  // Activity filter options
  const activityOptions = [
    { id: "social", label: "Social event" },
    { id: "outdoors", label: "Outdoors" },
    { id: "walks", label: "Walks" },
    { id: "private", label: "Private property" },
  ]

  // Dog size filter options
  const dogSizeOptions = [
    { id: "big", label: "Big" },
    { id: "medium", label: "Medium" },
    { id: "small", label: "Small" },
    { id: "any", label: "Any" },
  ]

  // Initial breed filter options
  const initialBreedOptions = [
    { id: "any", label: "Any" },
    { id: "yorkshire", label: "Yorkshire Terrier" },
    { id: "shihtzu", label: "Shih Tzu" },
    { id: "frenchbulldog", label: "French Bulldog" },
    { id: "labrador", label: "Labrador Retriever" },
    { id: "germanshepherd", label: "German Shepherd" },
    { id: "rottweiler", label: "Rottweiler" },
    { id: "poodle", label: "Poodle" },
  ]

  // Extended breed filter options
  const extendedBreedOptions = [
    { id: "dachshund", label: "Dachshund" },
    { id: "bulldog", label: "Bulldog" },
    { id: "cavalier", label: "Cavalier King Charles Spaniel" },
    { id: "yorkshire2", label: "Yorkshire Terrier" },
    { id: "shibainu", label: "Shiba Inu" },
    { id: "chihuahua", label: "Chihuahua" },
    { id: "havanese", label: "Havanese" },
    { id: "beagle", label: "Beagle" },
    { id: "maltese", label: "Maltese" },
    { id: "cocker", label: "Cocker Spaniel" },
  ]

  // State for open sections
  const [openSections, setOpenSections] = useState({
    activity: true,
    dogSize: false,
    breed: false,
  })

  // Toggle section open/close
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="modal">
      <div className="modal__header">
        <button className="modal__close">
          <img src={CloseThickIcon || "/placeholder.svg"} alt="Cerrar" className="modal__close-icon" />
        </button>
      </div>

      <FilterSection
        title="Type of activity"
        isOpen={openSections.activity}
        onToggle={() => toggleSection("activity")}
        options={activityOptions}
      />

      <FilterSection
        title="Dog size"
        isOpen={openSections.dogSize}
        onToggle={() => toggleSection("dogSize")}
        options={dogSizeOptions}
      />

      <FilterSection
        title="Breed"
        isOpen={openSections.breed}
        onToggle={() => toggleSection("breed")}
        options={initialBreedOptions}
        extendedOptions={extendedBreedOptions}
        hasMoreOptions
      />

      <DateFilterSection />
    </div>
  )
}

export default FilterModal
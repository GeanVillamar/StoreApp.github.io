import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropdownMenu() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data); // La API devuelve un array de strings.
      })
      .catch((err) => console.log("Error fetching categories:", err));
  }, []);

  const handleSelect = (category) => {
    setSelectedCategory(category); // Actualiza la categoría seleccionada.
    console.log("Selected category:", category);
  };

  return (
    <div className="dropdown-menu">
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedCategory || "Select a Category"}
        onSelect={handleSelect} // Maneja la selección.
      >
        {categories.map((category, index) => (
          <Dropdown.Item key={index} eventKey={category}>
            {category}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default DropdownMenu;

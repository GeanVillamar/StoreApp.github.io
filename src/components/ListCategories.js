import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import CategoryProduct from "./CategoryProduct";

function ListCategories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err.message));
  }, []);

  return (
    <div className="categories-container" style={{ display: "flex" }}>
      {/* Lista de categorías */}
      <ListGroup style={{ flex: 1 }}>
        {categories.map((category, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => setSelectedCategory(category)} // Actualiza la categoría seleccionada
          >
            {category}
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Componente CategoryProduct */}
      <div
        className="category-products"
        style={{
          flex: 2,
          marginLeft: "20px",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {selectedCategory ? (
          <CategoryProduct category={selectedCategory} />
        ) : (
          <p>Selecciona una categoría para ver los productos.</p>
        )}
      </div>
    </div>
  );
}

export default ListCategories;

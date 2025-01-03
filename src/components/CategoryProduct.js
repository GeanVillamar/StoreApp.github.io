import { useState, useEffect } from "react";

function CategoryProduct({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error fetching products:", err.message));
    }
  }, [category]);

  return (
    <div>
      <h2>Productos en {category}</h2>
      <div className="category-products">
        {products.map((product) => (
          <div className="border-product">
            <ul key={product.id}>
              <div className="title-product">{product.title}</div>
              <img
                src={product.image}
                alt="imagen-product"
                id="imagen-product"
              />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProduct;

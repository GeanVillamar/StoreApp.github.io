import { useState, useEffect } from "react";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="product-container">
      {product.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt="productImage"
              className="product-image"
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">{product.price}</p>
            <div className="button"></div>
            <div className="add-btn">Add the car</div>
          </div>
        );
      })}
    </div>
  );
}
export default Products;

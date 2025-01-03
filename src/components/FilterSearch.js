import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function FilterSearch() {
  const [apiProducts, setApiProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredProducts, setfilteredProducts] = useState([]);

  //fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      // save the complete list of users to the new state
      .then((data) => {
        setApiProducts(data);
        //update the filteredProducts state
        setfilteredProducts(data);
      })
      // if there's an error we log it to the console
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = apiProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setfilteredProducts(filteredItems);
  };

  return (
    <div>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      <div>
        {filteredProducts.length === 0 ? (
          <p>No product found</p>
        ) : (
          <div className="container-cardproducts">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                {product.title}
                <img
                  src={product.image}
                  alt="productImage"
                  className="product-image"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default FilterSearch;

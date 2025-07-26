import { useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "../components/ProductItem";
import "../index.css";

export default function Home() {
  const { products, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="home-page">
      <h2>Explore Our Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductItem key={p.id} product={p} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}


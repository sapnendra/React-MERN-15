import { alert } from "react-alertify-mini";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      alert.success("Products fetched successfully");
    } catch (err) {
      alert.error("Failed to fetch products");
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-5 border border-gray-700 rounded-4xl mt-10 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mb-10">Products Page</h1>
      <div className="scroll grid grid-cols-3 gap-5 h-150 overflow-y-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 text-white p-5 m-5 rounded-2xl flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-5"
            />
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-lg font-medium mb-2">${product.price}</p>
            <p className="text-sm text-gray-300">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

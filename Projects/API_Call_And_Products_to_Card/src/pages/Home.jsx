import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AllProducts from "../components/AllProducts";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error in fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="border-2 border-gray-700 rounded-4xl mt-10">
      <div className="py-10 flex flex-col gap-6">
        <h1 className="text-5xl text-center font-bold bg-linear-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">
          Available Products
        </h1>
        <div className="p-10 flex flex-wrap justify-center shrink-0">
          {products.map((product) => {
            return <AllProducts key={product.id} item={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

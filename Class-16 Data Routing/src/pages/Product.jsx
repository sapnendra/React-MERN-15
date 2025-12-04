import { useLoaderData } from "react-router";

const Product = () => {
  const data = useLoaderData();
  return (
    <div className="product h-screen overflow-y-auto w-full flex flex-col items-center gap-6 px-30 pt-40">
      <h1 className="text-3xl text-red-400 font-bold">This is Product Page</h1>
      <div className="grid grid-cols-5 gap-4">
        {data && data.map((product) => (
          <div key={product.id} className="hover:shadow-xl duration-300 border p-4 rounded">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <div className="flex items-center justify-between mt-4">
                <button className="cursor-pointer mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add to Cart</button>
                <button className="cursor-pointer mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

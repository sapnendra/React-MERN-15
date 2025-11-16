import { toast } from "react-toastify";

const Products = ({ cartItem, setCartItems }) => {
  const products = [
    {
      title: "Handcrafted Marble Keyboard",
      price: "₹794",
      image: "https://loremflickr.com/1280/1071/product?lock=368626721729008",
    },
    {
      title: "Bespoke Ceramic Chips",
      price: "₹324",
      image: "https://loremflickr.com/1280/2687/product?lock=3165695860721042",
    },
    {
      title: "Licensed Ceramic Hat",
      price: "₹403",
      image: "https://loremflickr.com/1280/321/product?lock=3030006294377109",
    },
    {
      title: "Oriental Steel Table",
      price: "₹306",
      image: "https://loremflickr.com/1280/954/product?lock=2259034356674565",
    },
  ];

  const handleAddToCart = (item) => {
    if (item) {
      setCartItems([...cartItem, item]);
      toast.success("Items added to Cart", { position: "top-right" });
    } else {
      toast.error("Item already in cart", { position: "top-right" });
    }
  };

  return (
    <div className="min-h-screen bg-black pt-40">
      <h1 className="text-white text-4xl text-center py-5">Our Products</h1>
      <div className="flex gap-10 shrink-0 flex-wrap">
        {products.map((item, idx) => {
          return (
            <div
              key={idx}
              className="h-150 w-120 rounded-lg p-5 flex flex-col gap-4 text-white border border-gray-600"
            >
              <img
                className="h-[70%] object-cover rounded-lg"
                src={item.image}
              />
              <h2 className="text-2xl font-semiold">{item.title}</h2>
              <h3 className="text-xl">Price: {item.price}</h3>
              <button
                onClick={() => handleAddToCart(item)}
                className="cursor-pointer px-6 rounded-lg py-2 bg-green-600 text-white font-bold text-lg"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

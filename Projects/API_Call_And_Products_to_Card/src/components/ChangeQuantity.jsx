const ChangeQuantity = ({quantity, setQuantity}) => {

  return (
    <div className="py-2 rounded-lg text-black bg-white font-bold flex items-center">
      <button onClick={() => setQuantity(quantity - 1)} className="text-lg cursor-pointer px-4">-</button>
      <button className="text-xl border-x border-gray-400 px-4">
        {quantity}
      </button>
      <button onClick={() => setQuantity(quantity + 1)} className="text-lg cursor-pointer px-4">+</button>
    </div>
  );
};

export default ChangeQuantity;

const Navbar = ({query, querySearch}) => {
  return (
    <div className="w-full flex justify-between items-center p-5 rounded-xl bg-gray-100">
      <h1 className="w-1/2 text-4xl font-bold text-blue-500">
        📸 Search images for -{" "}
        <span className="text-3xl text-green-500">{query.toUpperCase()}</span>
      </h1>
      <form onSubmit={querySearch} className="w-1/2 flex justify-end">
        <input
          type="text"
          className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-blue-500"
          placeholder="Search for images..."
          required
        />
        <button
          type="submit"
          className="font-semibold bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-700 cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;

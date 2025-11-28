const Header = () => {
  return (
    <header className="w-full text-xl text-center bg-black sticky bottom-0 py-4">
      <p className="text-white">
        Designed and Managed by -{" "}
        <a
          href="https://github.com/sapnendra"
          className="text-yellow-600 font-semibold"
        >
          Sapnendra
        </a>
      </p>
    </header>
  );
};

export default Header;

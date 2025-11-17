import MyStore from "./CreateContext";

const ProvideContext = ({ children }) => {
  const data = "Data from context api."
  return (
    <MyStore.Provider value={data}>
        {children}
    </MyStore.Provider>
  );
};

export default ProvideContext;

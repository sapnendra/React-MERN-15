import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Images from "./components/Images";

const API_KEY = "Z7GTi0Rs320ECsd4kXhxt3pFCHm9nCzsILGM3siBMvtbKiM3SFSV6cxj";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("Nature");

  const fetchImage = async () => {
    try {
      setLoading(true);
      const options = {
        headers: {
          Authorization: API_KEY,
        },
      };
      
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`,
        options
      );

      setPhotos([...photos, ...res.data.photos]);
    } catch (err) {
      console.log("Faild to fetch:", err);
      toast.error(
        "Failed to fecth images, Check logs for more info...",
        "top-center"
      );
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const querySearch = (e) => {
    e.preventDefault();
    const val = e.target[0].value;
    setPhotos([]);
    setQuery(val);
  };

  useEffect(() => {
    fetchImage();
  }, [page, query]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-9/12 mx-auto space-y-8 flex items-center justify-center flex-col py-12">

        <Navbar query={query} querySearch={querySearch} />

        {photos.length === 0 && (
          <h1 className="w-full text-4xl font-bold text-center">
            Search query not found
          </h1>
        )}

        <div className="grid lg:grid-cols-5 lg:gap-12 gap-4">
          {photos.map((item, idx) => (
            <Images key={idx} item={item} />
          ))}
        </div>

        {loading && (
          <i className="ri-loader-line text-4xl text-gray-400 animate-spin"></i>
        )}

        {photos.length > 0 && (
          <button
            onClick={loadMore}
            className="bg-rose-500 py-3 px-16 rounded-lg font-bold text-white hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Load More
          </button>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;

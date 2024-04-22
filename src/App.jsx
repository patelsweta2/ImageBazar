import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import ImageList from "./components/ImageList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import "./App.scss";

const App = () => {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/photos").then((res) => {
      console.log("Fetched data:", res);
    });
  };
  return (
    <div className="app">
      <SearchBar />
      <ImageList />
      <Pagination />
    </div>
  );
};

export default App;

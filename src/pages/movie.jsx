// Components
import Header from "../components/Fragments/Header";
import NavBar from "../components/Layout/NavBar";
import CircularGallery from "../components/Fragments/CircularGalery";
import Footer from "../components/Layout/Footer";
import Button from "../components/Elements/Button/Button";

// React
import { useState } from "react";

//
const MoviePage = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const handlePlus = () => {
    setCount((prev) => (prev === 20 ? 0 : prev + 1));
  };

  // Render Area
  return (
    <div className="bg-[#181A1C]">
      <NavBar></NavBar>
      <Header></Header>

      <div className="w-full h-[500px] flex flex-col items-center justify-center relative">
        <h2 className="absolute text-3xl font-semibold text-white top-20 text-center">
          Movies
        </h2>
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl">
          Simple useState Mission Harisenin FE 2B
        </h1>
        <Button
          onClick={() => setCount(0)}
          varian="bg-white py-2 px-3 rounded-md mt-2 "
        >
          Reset
        </Button>
        <div className="flex flex-raw items-center  gap-3 justify-between max-w-sm">
          <Button
            onClick={handleMinus}
            varian="bg-white py-2 px-3 rounded-md mt-2 "
          >
            -
          </Button>
          <h1 className="text-white py-2 px-4 border border-white rounded-md mt-2">
            {count}
          </h1>
          <Button
            onClick={handlePlus}
            varian="bg-white py-2 px-3 rounded-md mt-2 "
          >
            +
          </Button>
        </div>
      </div>
      {console.log("render")}
      <Footer></Footer>
    </div>
  );
};

export default MoviePage;

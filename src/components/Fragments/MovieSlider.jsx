import CardMovie from "./CardMovie";

import movie1 from "../../assets/movie-1.jpg";
import movie2 from "../assets/movie-2.jpg";
import movie3 from "../assets/movie-3.jpg";
import movie4 from "../assets/movie-4.jpg";

const MovieSlider = () => {
  const scrollLeft = () => {
    document.getElementById("movie-scroll").scrollLeft -= 350;
  };
  const scrollRight = () => {
    document.getElementById("movie-scroll").scrollLeft += 350;
  };

  const movies = [
    { title: "Don't Look Up", rating: 4.5, image: movie1 },
    { title: "The Batman", rating: 4.2, image: movie2 },
    { title: "Blue Lock", rating: 4.6, image: movie3 },
    { title: "A Man Called Otto", rating: 4.4, image: movie4 },
  ];

  return (
    <div className="relative mt-6">
      <h2 className="text-xl font-bold mb-3">Melanjutkan Tonton Film</h2>

      {/* Button Kiri */}
      <button
        onClick={scrollLeft}
        className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
      >
        ◀
      </button>

      {/* LIST MOVIE */}
      <div
        id="movie-scroll"
        className="flex gap-4 overflow-x-auto scroll-smooth pb-3 no-scrollbar"
      >
        {movies.map((movie, index) => (
          <CardMovie key={index} {...movie} />
        ))}
      </div>

      {/* Button Kanan */}
      <button
        onClick={scrollRight}
        className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
      >
        ▶
      </button>
    </div>
  );
};

export default MovieSlider;

import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_TMDB_API_IMAGE_URL;
const TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export const CardMovie = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieRes = await fetch(
          `${BASE_URL}/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );
        const movieData = await movieRes.json();

        const genreRes = await fetch(
          `${BASE_URL}/genre/movie/list?language=en`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );
        const genreData = await genreRes.json();

        setMovies(movieData.results);
        setGenres(genreData.genres);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  const mapGenres = (genreIds) => {
    return genreIds.map(
      (id) => genres.find((genre) => genre.id === id)?.name || "Unknown"
    );
  };

  return (
    <div className="grid grid-cols-4 p-4 justify-center gap-y-30 mx-10 mb-30 mt-10">
      {movies.map((movie) => {
        const genreNames = mapGenres(movie.genre_ids);
        return (
          <div
            key={movie.id}
            className="relative rounded-[6px] w-min h-[25rem]"
          >
            <div className="w-60 h-fit cursor-pointer group relative ">
              <img
                src={`${IMAGE_URL}/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                }}
              >
                <button className="w-2/3 h-10 border rounded-md text-white">
                  Details
                </button>
                <button className="w-2/3 h-10 bg-blue-600 rounded-md text-white">
                  Buy Ticket
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-3 mt-2">
              <div className="text-lg font-semibold">{movie.title}</div>
              <div className="flex flex-row flex-wrap gap-1">
                {genreNames.map((genre, idx) => (
                  <span
                    key={idx}
                    className="bg-[#A0A3BD1A] text-[#A0A3BD] text-sm px-2 py-0.5 rounded-full gap-1"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

import { useEffect, useState } from "react";
import { CardChoose } from "../../components/CardChoose";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Subscriber } from "../../components/Subscriber";
import { CardHomeMovie } from "../../components/CardHomeMovie";

const BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_TMDB_API_IMAGE_URL;
const TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export const Home = () => {
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
    <>
      <Navbar />

      <section className="flex flex-row justify-between mx-25 my-10">
        <div className="flex-2">
          <p className="text-[#1D4ED8] font-bold text-[18px]/[34px] tracking-[0.75px] font-[Mulish]">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </p>
          <p className="text-[#121212] font-medium text-[48px]/[70px] tracking-[1px] text-clip font-[Mulish]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </p>
          <p className="text-[#A0A3BD] font-normal text-[16px]/[32px] tracking-[0.75px]">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-2 ">
          <div className="row-start-1 col-start-1">
            <img src="john-whick-1.svg" alt="John Wick" />
          </div>

          <div className="row-start-1 row-end-3 col-start-2">
            <img src="lion-king-2.svg" alt="Lion King" />
          </div>

          <div className="row-start-2 row-end-4 col-start-1">
            <img src="spiderman-3.svg" alt="Spiderman" />
          </div>

          <div className="row-start-3 col-start-2">
            <img src="roblox-4.svg" alt="Roblox" />
          </div>
        </div>
      </section>

      <section className="flex flex-col mx-25">
        <div className="text-[#1D4ED8] font-bold text-[18px]/[34px] tracking-[0.75px] font-[Mulish]">
          WHY CHOOSE US
        </div>
        <div className="text-[#121212] font-normal text-[32px]/[45px] tracking-[1px] mb-5">
          Unleashing the Ultimate Movie Experience
        </div>
        <div className="flex flex-row mt-4 gap-3">
          <CardChoose
            icon={"./icon-choose-guaranteed.svg"}
            altIcon={"Guaranteed"}
            title={"Guaranteed"}
          />
          <CardChoose
            icon={"./icon-choose-affordable.svg"}
            altIcon={"Affordable"}
            title={"Affordable"}
          />
          <CardChoose
            icon={"./icon-choose-cs.svg"}
            altIcon={"24/7 Customer Supportanteed"}
            title={"24/7 Customer Support"}
          />
        </div>
      </section>

      <section className="mx-25 flex flex-col my-10 gap-5">
        <div className="text-[#1D4ED8] font-bold text-[18px]/[34px] font-[Mulish] text-center">
          Movies
        </div>
        <div className="text-[#121212] font-normal text-[32px]/[45px] font-[Mulish] text-center">
          Exciting Movies That Should Be Watched Today
        </div>

        <div className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden h-[520px]  border-gray-50">
          {movies.map((movie) => {
            const genreNames = mapGenres(movie.genre_ids);
            return (
              <CardHomeMovie
                key={movie.id}
                movie={movie}
                IMAGE_URL={IMAGE_URL}
                genreNames={genreNames}
              />
            );
          })}
        </div>

        <div className="mt-4 flex flex-row justify-center items-center">
          <button className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>View All</span>
            <img src="view-all-arrow.svg" alt="Arrow" className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="mx-25 flex flex-col mb-10 gap-5 mt-5">
        <div className="flex flex-row justify-between ">
          <div>
            <div className="font-[Mulish] font-bold text-[18px]/[34px] text-[#1D4ED8]">
              UPCOMING MOVIES
            </div>
            <div className="font-[Mulish] font-bold text-[32px]/[45px] text-[#121212]">
              Exciting Movie Coming Soon
            </div>
          </div>

          <div className="flex gap-5">
            <div className="bg-[#A0A3BD] w-[65px] h-[65px] rounded-full flex justify-center items-center">
              <img src="arrow-up.svg" alt="Arrow" />
            </div>
            <div className="bg-[#1D4ED8] w-[65px] h-[65px] rounded-full rotate-180 flex justify-center items-center">
              <img src="arrow-up.svg" alt="Arrow" />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden h-[520px]  border-gray-50">
          {movies.map((movie) => {
            const genreNames = mapGenres(movie.genre_ids);
            return (
              <CardHomeMovie
                key={movie.id}
                movie={movie}
                IMAGE_URL={IMAGE_URL}
                genreNames={genreNames}
              />
            );
          })}
        </div>
      </section>

      <Subscriber />
      <Footer />
    </>
  );
};

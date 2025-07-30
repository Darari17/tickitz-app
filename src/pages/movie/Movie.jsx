import { CardMovie } from "../../components/CardMovie";
import { Footer } from "../../components/Footer";
import { HeroMovie } from "../../components/HeroMovie";
import { Navbar } from "../../components/Navbar";
import { Subscriber } from "../../components/Subscriber";

export const Movie = () => {
  return (
    <>
      <HeroMovie />
      <CardMovie />
      <Subscriber />
    </>
  );
};

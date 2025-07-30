export const HeroMovie = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={"./bg-hero.svg"}
        alt="Hero Background"
        className="w-full h-full object-cover bg-center"
      />

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 gap-4 z-20">
        <p className="text-white text-sm font-semibold tracking-wide">
          LIST MOVIE OF THE WEEK
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-medium max-w-[700px] leading-snug">
          Experience the Magic of Cinema: Book Your Tickets Today
        </h1>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <img src="/hero-slider.svg" alt="Slider Indicator" />
      </div>
    </section>
  );
};

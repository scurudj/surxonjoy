import SearchBar from "./SearchBar";
import PopularTags from "./PopularTags";

export default function Hero() {
  return (
    <section
      className="relative h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Gradient */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">

          <div className="max-w-5xl">

            <h1 className="text-6xl font-bold leading-tight text-white text-center">
              Surxondaryoda uy topishning eng oson yo‘li
            </h1>

            <p className="mt-6 text-xl text-gray-200 text-center">
              Ijara va sotiladigan uylarni bir joyda toping.
            </p>

            <div className="mt-10">
              <SearchBar />
            </div>

            <PopularTags />

          </div>

        </div>
      </div>
    </section>
  );
}
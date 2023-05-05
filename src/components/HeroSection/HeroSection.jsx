import { Link } from "react-router-dom";

const HeroSection = () => {
  const foodImg = `https://raw.githubusercontent.com/AfrideHossain/images/main/food/IMG_20220508_191859_11compressed.jpg`;
  return (
    <div className="flex md:flex-row flex-col-reverse justify-evenly items-center gap-5 bg-violet-50 p-10 max-w-full">
      {/* hero texts */}
      <div className="flex flex-col items-start">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 flex flex-col gap-2 mb-5">
          <span className="text-3xl md:text-5xl">Discover</span> A World Of
          Flavors
        </h1>
        <p className="text-base font-semibold text-gray-600 mb-5">
          Unleash your inner chef and explore a diverse collection of
          mouthwatering recipes from around the globe.
        </p>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md py-3 px-5 flex items-center justify-center space-x-2"
        >
          Get Started
        </Link>
      </div>
      <div>
        <img
          className="w-72 rounded-full drop-shadow-lg"
          src={foodImg}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;

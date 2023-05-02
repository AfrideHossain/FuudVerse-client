import ChefCard from "../ChefCard/ChefCard";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 items-center mx-auto w-fit">
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
      </div>
    </>
  );
};

export default Home;

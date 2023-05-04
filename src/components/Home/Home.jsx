import { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  const [allchef, setAllchef] = useState(null);
  useEffect(() => {
    fetch("https://fuudverse-backend-afridehossain.vercel.app/allchef/")
      .then((res) => res.json())
      .then((data) => setAllchef(data));
  }, []);
  return (
    <>
      <HeroSection />
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 items-center mx-auto w-fit mt-5">
        {/* <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard /> */}
        {allchef &&
          allchef.map((chef) => <ChefCard key={chef.id} chef={chef} />)}
      </div>
    </>
  );
};

export default Home;

import { HeartIcon } from "@heroicons/react/24/outline";
import RecipeCard from "../RecipeCard/RecipeCard";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ChefRecipes = () => {
  const chefSampleImg = `https://raw.githubusercontent.com/AfrideHossain/images/main/chef/female-chef-chopping-vegetables-kitchen.jpg`;
  const param = useParams();
  const [chefInfo, setChefInfo] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch(
      `https://fuudverse-backend-afridehossain.vercel.app/allchef/${param.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setChefInfo(data);
      });
  }, []);
  useEffect(() => {
    setloading(true);
    fetch("https://fuudverse-backend-afridehossain.vercel.app/allrecipes/")
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setRecipes(data);
      });
  }, []);
  return (
    <>
      {/* {console.log(recipes)} */}
      <div className="container">
        {/* Banner */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="contianer flex md:flex-row flex-col justify-evenly items-center gap-5 bg-violet-50 p-10 max-w-full">
            <img
              className="w-72 rounded-lg drop-shadow-lg"
              src={chefInfo?.chefImg}
              alt="Chef Image"
            />
            <div>
              <h1 className="text-2xl text-gray-800 font-bold mb-2">
                {chefInfo?.chefName}
              </h1>
              <p className="text-gray-500 font-semibold mb-2">
                {chefInfo?.bio}
              </p>
              <div className="flex items-center mt-6 w-fit gap-6">
                <div className="flex gap-2 items-center">
                  <HeartIcon className="w-7 h-7 text-violet-600" />
                  <p className="text-base font-medium text-gray-600 flex flex-col items-center">
                    {chefInfo?.likes}
                    <span className="font-semibold text-gray-700">Likes</span>
                  </p>
                </div>
                <p className="text-base font-medium text-gray-600 flex flex-col items-center">
                  {chefInfo?.yearsOfExperience} + years{" "}
                  <span className="font-semibold text-gray-700">
                    Experience
                  </span>
                </p>
                <p className="text-base font-medium text-gray-600 flex flex-col items-center">
                  {chefInfo?.numRecipes} +{" "}
                  <span className="font-semibold text-gray-700">Recipes</span>
                </p>
              </div>
            </div>
          </div>
        )}
        {/* recipe cards */}
        <div className="grid gap-5 grid-cols-1 items-center mx-auto w-fit">
          {!recipes ? (
            <Spinner />
          ) : (
            recipes.map((recipe, idx) => {
              return <RecipeCard key={idx} recipe={recipe} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ChefRecipes;

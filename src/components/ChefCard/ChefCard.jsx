import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const ChefCard = (props) => {
  const { id, chefName, yearsOfExperience, numRecipes, likes } = props.chef;
  HeartIcon;
  const chefSampleImg = `https://raw.githubusercontent.com/AfrideHossain/images/main/chef/female-chef-chopping-vegetables-kitchen.jpg`;
  return (
    <div className="bg-gray-100 w-fit p-4 rounded-lg shadow-md border border-violet-100">
      <div>
        <img className="w-64 rounded-md" src={chefSampleImg} alt="" />
      </div>
      <div className="ps-3 mt-4">
        <h1 className="text-2xl text-gray-800 font-bold mb-2">{chefName}</h1>
        <p className="text-lg font-medium text-gray-600">
          {yearsOfExperience} + years experience
        </p>
        <p className="text-lg font-medium text-gray-600">
          {numRecipes} + recipes
        </p>
        <div className="mt-5 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <HeartIcon className="w-6 h-6 text-violet-600" />
            <p className="text-base font-semibold text-gray-600">{likes}</p>
          </div>
          <Link
            to={`/chefrecipes/${id}`}
            className="bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-md py-2 px-4 flex items-center justify-center space-x-2"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;

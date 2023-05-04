import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "react-toastify";
const RecipeCard = (props) => {
  const { recipe_name, ingredients, instructions, rating } = props.recipe;

  const [favBtnDisabled, setFavBtnDisabled] = useState(false);
  const handleHeart = () => {
    toast.success("❤️ The recipe is your favorite");
    setFavBtnDisabled(true);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-100 max-w-full md:w-[992px] m-4 p-4 rounded-lg shadow-md border border-violet-100">
        <div className="ps-3 mt-4">
          <h1 className="text-2xl text-gray-800 font-bold mb-2">
            {recipe_name}
          </h1>
          <p className="text-base font-medium text-gray-600">{instructions}</p>
          <div className="text-lg font-medium text-gray-600 grid grid-cols-1 md:grid-cols-3 mt-4">
            {ingredients.map((ingredient, indx) => {
              return (
                <li className="text-sm" key={indx}>
                  {ingredient}
                </li>
              );
            })}
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <p className="text-base font-medium text-gray-600 flex justify-end items-start gap-2">
              <StarIcon className="w-6 h-6" />
              {rating}
            </p>
            <div className="w-full mt-5 flex justify-end items-start gap-2">
              <p className="text-base font-medium text-gray-600">
                Make it favorite
              </p>
              <button
                onClick={handleHeart}
                disabled={favBtnDisabled}
                className="text-violet-600 hover:text-violet-700 flex items-center justify-center"
              >
                <HeartIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;

import { HeartIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
const RecipeCard = () => {
  const sampleRecipe = {
    recipe_name: "Classic Spaghetti Bolognese",
    ingredients: [
      "8 ounces spaghetti",
      "1 pound ground beef",
      "1 medium onion, chopped",
      "3 cloves garlic, minced",
      "1 can (14.5 ounces) canned tomatoes",
      "1 tablespoon tomato paste",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt to taste",
      "Black pepper to taste",
      "2 tablespoons olive oil",
      "Grated Parmesan cheese, for serving",
    ],
    instructions:
      "Cook the spaghetti according to the package directions in a large pot of salted boiling water. In a large skillet, heat the olive oil over medium heat. Add the chopped onion and cook until softened, about 5 minutes. Add the minced garlic and cook for 1 minute more. Add the ground beef to the skillet and cook until browned, breaking up any clumps with a wooden spoon. Add the canned tomatoes, tomato paste, oregano, basil, salt, and black pepper to the skillet. Stir to combine, then reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally. Drain the cooked spaghetti and divide it among four serving bowls. Top each serving with the meat sauce and a sprinkle of grated Parmesan cheese. Enjoy!",
    rating: 4.5,
    favorite: false,
  };
  const handleHeart = () => {
    toast.success("Yey, Toast showing", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-100 max-w-full md:w-[992px] m-4 p-4 rounded-lg shadow-md border border-violet-100">
        <div className="ps-3 mt-4">
          <h1 className="text-2xl text-gray-800 font-bold mb-2">
            Classic Spaghetti Bolognese
          </h1>
          <p className="text-base font-medium text-gray-600">
            {sampleRecipe.instructions}
          </p>
          <div className="text-lg font-medium text-gray-600 grid grid-cols-1 md:grid-cols-3 mt-4">
            {sampleRecipe.ingredients.map((ingredient, indx) => {
              return (
                <li className="text-sm" key={indx}>
                  {ingredient}
                </li>
              );
            })}
          </div>
          <div className="w-full mt-5 flex justify-end items-start gap-2">
            <p className="text-base font-medium text-gray-600">
              Make it favorite
            </p>
            <button
              onClick={handleHeart}
              className="text-violet-600 hover:text-violet-700 flex items-center justify-center"
            >
              <HeartIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;

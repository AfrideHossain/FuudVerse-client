import { HeartIcon } from "@heroicons/react/24/outline";
const ChefRecipes = () => {
  const chefSampleImg = `https://raw.githubusercontent.com/AfrideHossain/images/main/chef/female-chef-chopping-vegetables-kitchen.jpg`;
  return (
    <>
      <div className="container">
        {/* Banner */}
        <div className="contianer flex md:flex-row flex-col justify-evenly items-center gap-5 bg-violet-50 p-10 max-w-full">
          <img
            className="w-72 rounded-lg drop-shadow-lg"
            src={chefSampleImg}
            alt="Chef Image"
          />
          <div>
            <h1 className="text-2xl text-gray-800 font-bold mb-2">
              Olivia Lane
            </h1>
            <p className="text-gray-500 font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              illum qui quia maxime doloribus nulla omnis veritatis voluptates,
              animi id odio placeat veniam eum suscipit, fugit hic tempora
              minima. Debitis?
            </p>
            <div className="flex items-center mt-6 w-fit gap-6">
              <div className="flex gap-2 items-center">
                <HeartIcon className="w-7 h-7 text-violet-600" />
                <p className="text-base font-medium text-gray-600 flex flex-col items-center">
                  200 <span className="font-semibold text-gray-700">Likes</span>
                </p>
              </div>
              <p className="text-base font-medium text-gray-600 flex flex-col items-center">
                6 + years{" "}
                <span className="font-semibold text-gray-700">Experience</span>
              </p>
              <p className="text-base font-medium text-gray-600 flex flex-col items-center">
                20 +{" "}
                <span className="font-semibold text-gray-700">Recipes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefRecipes;

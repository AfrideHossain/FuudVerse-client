import { BookOpenIcon } from "@heroicons/react/24/outline";

const CookingBooks = () => {
  return (
    <div>
      <div className="container mt-10 max-w-full md:w-[992px] mx-auto p-8">
        <h1 className="text-3xl text-center font-bold text-gray-800">
          Cooking Resources
        </h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 items-center mx-auto w-fit mt-5">
          <div className="flex items-center p-4 rounded border gap-4 h-36">
            <BookOpenIcon className="w-36 h-36 text-gray-700" />
            <div>
              <h1 className="text-xl font-bold text-gray-700">
                How to Cook Everything: The Basics
              </h1>
              <p className="text-base font-medium text-gray-500">
                Mark Bittman
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 rounded border gap-4 h-36">
            <BookOpenIcon className="w-36 h-36 text-gray-700" />
            <div>
              <h1 className="text-xl font-bold text-gray-700">
                Milk Street: Cookish
              </h1>
              <p className="text-base font-medium text-gray-500">
                Christopher Kimball
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 rounded border gap-4 h-36">
            <BookOpenIcon className="w-36 h-36 text-gray-700" />
            <div>
              <h1 className="text-xl font-bold text-gray-700">
                Essentials of Classic Italian Cooking
              </h1>
              <p className="text-base font-medium text-gray-500">
                Marcella Hazan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingBooks;

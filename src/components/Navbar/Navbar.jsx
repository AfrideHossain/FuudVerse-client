import { Link } from "react-router-dom";
import logo from "../../assets/logo/FuudVerse.png";
import { useContext, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../Context/AuthContextProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [usernameShow, setUsernameShow] = useState(false);
  const { user } = useContext(AuthContext);
  const personImgUrl = user?.photoURL;
  return (
    <div className="sticky top-0 z-10 container mx-auto bg-white shadow-lg rounded-lg">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} className="h-10 w-auto" alt="Fuudverse logo" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
          >
            <span className="sr-only">Open mobile menu</span>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <nav className="hidden md:flex space-x-8 w-full justify-between">
          <div className="flex items-center gap-5 grow justify-center">
            <div className="flex items-center space-x-2">
              <div>
                <Link to="/" className="text-base font-semibold text-gray-700">
                  Home
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div>
                <Link
                  to="/blog"
                  className="text-base font-semibold text-gray-700"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {user ? (
              <div className="w-12 h-12 rounded-full">
                <img
                  className="w-full rounded-full"
                  src={personImgUrl}
                  alt="Profile Picture"
                  onMouseOver={() => {
                    setUsernameShow(true);
                  }}
                  onMouseLeave={() => {
                    setUsernameShow(false);
                  }}
                />
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white rounded-full py-2 px-4 flex items-center space-x-2"
              >
                <p className="text-bas font-semibold text-white">
                  Login/Register
                </p>
              </Link>
            )}
            {/* <Link
              to="/login"
              className="bg-blue-500 text-white rounded-full py-2 px-4 flex items-center space-x-2"
            >
              <p className="text-bas font-semibold text-white">
                Login/Register
              </p>
            </Link>
            <div className="w-12 h-12 rounded-full">
              <img
                className="w-full rounded-full"
                src={personImgUrl}
                alt="Profile Picture"
              />
            </div> */}
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden py-3 px-6 border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-center space-x-2 border border-blue-400 rounded p-2 gap-2">
                <div>
                  <Link
                    to="/"
                    className="text-base font-semibold text-gray-700"
                  >
                    Home
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 border border-blue-400 rounded p-2 gap-2">
                <div>
                  <Link
                    to="/blog"
                    className="text-base font-semibold text-gray-700"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />
            {!user ? (
              <Link
                to="/login"
                className="bg-blue-500 text-white rounded-full py-2 px-4 flex items-center justify-center space-x-2"
              >
                <div>
                  <p className="text-base text-center font-semibold text-white">
                    Login/Register
                  </p>
                </div>
              </Link>
            ) : (
              <div className="w-12 h-12 rounded-full">
                <img
                  className="w-full rounded-full"
                  src={personImgUrl}
                  alt="Profile Picture"
                  onMouseOver={() => {
                    setUsernameShow(true);
                  }}
                  onMouseLeave={() => {
                    setUsernameShow(false);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className={`${
          usernameShow ? "block" : "hidden"
        } absolute right-0 bg-violet-400 text-white font-semibold p-4 mt-4 rounded-md`}
      >
        {user?.displayName}
      </div>
    </div>
  );
};

export default Navbar;

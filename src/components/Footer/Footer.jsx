import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/FuudVerse.png";
const Footer = () => {
  return (
    <div className="w-full h-fit py-36 flex flex-col items-center gap-5">
      <div className="flex items-center">
        <img src={logo} className="h-10 w-auto" alt="Fuudverse logo" />
      </div>
      <div className="flex items-center gap-5 grow justify-center">
        <div className="flex items-center space-x-2">
          <div>
            <NavLink to="/" className="text-base font-semibold text-gray-700">
              Home
            </NavLink>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <NavLink
              to="/blog"
              className="text-base font-semibold text-gray-700"
            >
              Blog
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

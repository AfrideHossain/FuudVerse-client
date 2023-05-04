import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { loginWithEmail, googleSignIn, githubSignIn } =
    useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err);
      });
  };
  const handleGithubLogin = () => {
    githubSignIn()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err);
      });
  };
  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmail(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-3 justify-center items-center bg-gray-100">
        <div className="flex justify-center items-center gap-5">
          <button
            className="flex justify-center items-center gap-4 outline-none border border-zinc-400 rounded-lg font-semibold text-lg py-3 px-6 cursor-pointer bg-white"
            onClick={handleGoogleLogin}
          >
            <img
              className="w-10"
              src="https://img.icons8.com/color/96/null/google-logo.png"
            />
            Google
          </button>
          <button
            className="flex justify-center items-center gap-4 outline-none border border-zinc-400 rounded-lg font-semibold text-lg py-3 px-6 cursor-pointer bg-white"
            onClick={handleGithubLogin}
          >
            <img
              className="w-10"
              src="https://img.icons8.com/ios-glyphs/60/null/github.png"
            />
            Github
          </button>
        </div>
        {/* horizontal line */}
        <div className="flex w-full gap-5 justify-center items-center">
          <hr className="w-20 border border-gray-200" />
          <h3 className="font-bold text-lg text-gray-400">OR</h3>
          <hr className="w-20 border border-gray-200" />
        </div>
        {/* Email and password login*/}
        <div className="flex items-center justify-center w-full md:w-96">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
            <div className="px-12 py-8">
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Sign In
              </h2>
              <p className="text-gray-600 text-center">
                {"Don't have an account? "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
              <form className="mt-6" onSubmit={handleEmailLogin}>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-bold text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 leading-tight text-gray-700 border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 font-bold text-gray-800"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-3 leading-tight text-gray-700 border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

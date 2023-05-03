import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

function Register() {
  const [error, setError] = useState(null);
  const { signUpWithEmail } = useContext(AuthContext);

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    // testing password
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    if (
      password.length === 0 ||
      username.length === 0 ||
      email.length === 0 ||
      photoURL.length === 0
    ) {
      setError("Please provide all information to continue");
      return;
    }
    console.log(username, photoURL, email, password);
    // signUpWithEmail(email, password)
    //   .then((result) => {
    //     console.log(result);
    //     updateUserProfile(username, photoURL).then((result) => {
    //       console.log(result);
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    signUpWithEmail(email, password, username, photoURL);
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
          <div className="px-12 py-8">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Create your account
            </h2>
            <p className="text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </p>
            <form className="mt-6" onSubmit={handleEmailSignUp}>
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="block mb-2 font-bold text-gray-800"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-4 py-3 leading-tight text-gray-700 border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="photoURL"
                  className="block mb-2 font-bold text-gray-800"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  className="w-full px-4 py-3 leading-tight text-gray-700 border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                  placeholder="Enter a url of our photo"
                  required
                />
              </div>
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
                  Create Account
                </button>
              </div>
            </form>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

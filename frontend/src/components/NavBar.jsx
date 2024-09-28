// import { signInWithPopup, signOut } from "firebase/auth";
// import { auth, provider } from ".././../firebase";

import { Link } from "react-router-dom";

const NavBar = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      {/* Website Name */}
      <Link to={"/"} className="text-white text-2xl font-bold">
        New Summarizer
      </Link>

      {/* Links Section */}
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="/favourites" className="text-white hover:text-gray-200">
              My Favourites
            </a>
          </li>
        </ul>
      </div>

      {/* Google Login Button */}
      <div>
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          onClick={() => {
            // Handle Google login logic here
            alert("Google login clicked");
          }}
        >
          Login with Google
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

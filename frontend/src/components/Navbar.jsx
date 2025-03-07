import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ThemeController from "./ThemeController";
import { useLogoutMutation } from "../redux/api/usersApiSlice";
import { removeUserInfo } from "../redux/features/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [logout, { isLoading, isError }] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      dispatch(removeUserInfo());
      navigate("/");
      alert(response.message);
    } catch (error) {
      console.error(error);
    }
  };

  if (isError) {
    alert("Logout failed!");
  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/entries">Entries</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          DayBook
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/entries">Entries</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <ThemeController />
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              {user.data.firstName}
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/change-password">Change Password</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Log out</button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/signup" className="btn hidden lg:flex">
              Sign Up
            </Link>
            <Link to="/login" className="btn">
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;

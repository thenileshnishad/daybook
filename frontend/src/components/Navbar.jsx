import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ThemeController from "./ThemeController";
import { useLogoutMutation } from "../redux/api/usersApiSlice";
import { removeUserInfo } from "../redux/features/userSlice";
import { toast } from "react-toastify";

import { FaHome, FaPencilAlt, FaBookOpen, FaInfo } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      dispatch(removeUserInfo());
      navigate("/");
      toast.success(response.message);
    } catch (error) {
      console.error(error);
      toast.error("Logout failed!");
    }
  };

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
              <Link to="/">
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link to="/entries">
                <FaBookOpen />
                View Entries
              </Link>
            </li>
            <li>
              <Link to="/add-entry">
                <FaPencilAlt />
                Add Entry
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaInfo />
                About
              </Link>
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
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/entries">
              <FaBookOpen />
              View Entries
            </Link>
          </li>
          <li>
            <Link to="/add-entry">
              <FaPencilAlt />
              Add Entry
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfo />
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <ThemeController />
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-transparent border-none shadow-none"
            >
              <FaRegUser />
              {user.data.firstName}
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile">
                  <FaRegUser />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/change-password">
                  <TbLockPassword />
                  Change Password
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>
                  <IoMdLogOut />
                  Log out
                </button>
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

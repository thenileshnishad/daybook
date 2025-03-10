import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { removeUserInfo } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { FaChevronDown, FaUser, FaLock } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const NavProfile = () => {
  const user = useSelector((state) => state.user);
  const [logout] = useLogoutMutation();
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

  const handleDropDownClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <>
      {user ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-primary">
            {user.data.firstName}
            <FaChevronDown />
          </div>
          <ul className="menu dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li onClick={handleDropDownClick}>
              <Link to="/profile">
                <FaUser />
                Profile
              </Link>
            </li>
            <div className="divider m-0"></div>
            <li onClick={handleDropDownClick}>
              <Link to="/change-password">
                <FaLock />
                Change Password
              </Link>
            </li>
            <div className="divider my-0"></div>
            <li onClick={handleDropDownClick}>
              <button onClick={handleLogout}>
                <IoLogOut />
                Log out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <Link to="/signup" className="btn btn-ghost hidden lg:flex">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-primary">
            Log In
          </Link>
        </>
      )}
    </>
  );
};
export default NavProfile;

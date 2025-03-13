import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaChevronDown, FaUser, FaSignOutAlt, FaLock } from "react-icons/fa";
import ModalLayout from "../ModalLayout";
import Logout from "../auth/Logout";
import { useState } from "react";
import Profile from "../auth/Profile";

const NavProfile = () => {
  const user = useSelector((state) => state.user);
  const [openLogout, setOpenLogout] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

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
              <button onClick={() => setOpenProfile(true)}>
                <FaUser />
                Profile
              </button>
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
              <button onClick={() => setOpenLogout(true)}>
                <FaSignOutAlt />
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

      <ModalLayout isOpen={openLogout} close={() => setOpenLogout(false)}>
        <Logout close={() => setOpenLogout(false)} />
      </ModalLayout>

      <ModalLayout isOpen={openProfile} close={() => setOpenProfile(false)}>
        <Profile close={() => setOpenProfile(false)} />
      </ModalLayout>
    </>
  );
};
export default NavProfile;

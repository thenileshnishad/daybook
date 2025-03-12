import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaInfo } from "react-icons/fa";

const NavLinks = () => {
  return (
    <>
      <li>
        <Link to="/">
          <FaHome />
          Home
        </Link>
      </li>
      <li>
        <Link to="/entries">
          <FaBookOpen />
          Your Entries
        </Link>
      </li>
      <li>
        <Link to="/about">
          <FaInfo />
          About
        </Link>
      </li>
    </>
  );
};
export default NavLinks;

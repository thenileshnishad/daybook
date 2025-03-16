import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaInfo } from "react-icons/fa";

const NavLinks = ({ toggle }) => {
  return (
    <>
      <li onClick={toggle}>
        <Link to="/">
          <FaHome />
          Home
        </Link>
      </li>
      <li onClick={toggle}>
        <Link to="/entries">
          <FaBookOpen />
          Your Entries
        </Link>
      </li>
      <li onClick={toggle}>
        <Link to="/about">
          <FaInfo />
          About
        </Link>
      </li>
    </>
  );
};
export default NavLinks;

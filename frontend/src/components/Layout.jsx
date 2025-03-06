import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useProfileQuery } from "../redux/api/usersApiSlice";
import { useDispatch } from "react-redux";
import { removeUserInfo, userInfo } from "../redux/features/userSlice";

const Layout = () => {
  const { data: profile, isError } = useProfileQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (profile) {
      dispatch(userInfo(profile));
    }
    if (isError) {
      dispatch(removeUserInfo());
    }
  }, [profile, dispatch, isError]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;

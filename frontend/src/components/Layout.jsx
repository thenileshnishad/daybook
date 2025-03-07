import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useProfileQuery } from "../redux/api/usersApiSlice";
import { useDispatch } from "react-redux";
import { removeUserInfo, userInfo } from "../redux/features/userSlice";
import Loader from "./Loader";

const Layout = () => {
  const { data: profile, isError, isLoading } = useProfileQuery();
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (profile) {
        dispatch(userInfo(profile));
      } else if (isError) {
        dispatch(removeUserInfo());
      }
      setIsReady(true);
    }
  }, [profile, dispatch, isError, isLoading]);

  if (!isReady) {
    return <Loader />;
  }

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

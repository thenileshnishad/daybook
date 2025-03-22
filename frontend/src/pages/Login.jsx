import { useState } from "react";
import { Link, Navigate, replace, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../redux/features/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      dispatch(userInfo(response));
      navigate("/", replace);
      toast.success(`Welcome back, ${response.data.firstName}`);
    } catch (error) {
      toast.error(error?.data?.message || "An unexpected error occurred!");
    }
  };

  return (
    <div className="min-h-[calc(100dvh-64px-52px-40px)]">
      <div className="my-10">
        <p className="text-lg font-semibold text-center">
          Log in to access your account
        </p>
        <p className="text-lg font-semibold text-center">
          and continue your journey with DayBook.
        </p>
      </div>
      <div className="flex justify-center px-7 my-10">
        <div className="card card-xl bg-base-200 w-full max-w-sm rounded-2xl shadow-xl hover:shadow-2xl">
          <div className="card-body">
            <h2 className="card-title block text-center text-lg mb-2">
              Log in to DayBook
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="text-sm">
                <div>
                  <label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input w-full rounded-lg my-3"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    autoComplete="on"
                  />
                </div>

                <div>
                  <label htmlFor="password">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="input w-full rounded-lg my-3"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full rounded-lg my-3"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Log in"}
                </button>
              </div>
            </form>

            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-red-500 hover:font-bold">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

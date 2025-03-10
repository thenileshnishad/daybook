import { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/usersApiSlice";
import { useDispatch } from "react-redux";
import { userInfo } from "../redux/features/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      dispatch(userInfo(response));
      navigate("/", replace);
      toast.success(response.message);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px-52px-40px)]">
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

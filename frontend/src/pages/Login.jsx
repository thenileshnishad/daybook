import { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/usersApiSlice";
import { useDispatch } from "react-redux";
import { userInfo } from "../redux/features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      dispatch(userInfo(response));
      navigate("/", replace);
      alert(response.message);
    } catch (error) {
      alert(error.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px-52px)]">
      <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title block text-center">Log in to DayBook</h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset w-xs p-2 pl-6">
              <label htmlFor="email" className="fieldset-label mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="input mb-2"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <label htmlFor="password" className="fieldset-label mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button
                type="submit"
                className="btn btn-neutral mt-4"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
            </fieldset>
          </form>

          <div className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-500 hover:font-bold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

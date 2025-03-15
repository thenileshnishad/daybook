import { useState } from "react";
import { Link, Navigate, replace, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../redux/api/usersApiSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../redux/features/userSlice";

const Signup = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signup, { isLoading }] = useSignupMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData).unwrap();
      dispatch(userInfo(response));
      navigate("/", replace);
      toast.success(
        `${response.data.firstName}, your account is created and you're logged in!`
      );
    } catch (error) {
      toast.error(error?.data?.message || "An unexpected error occurred!");
    }
  };

  return (
    <div className="min-h-[calc(100svh-64px-52px-40px)]">
      <div className="my-10">
        <p className="text-lg font-semibold text-center">
          Create your DayBook account
        </p>
        <p className="text-lg font-semibold text-center">
          and stay organized effortlessly.
        </p>
      </div>
      <div className="flex justify-center px-7 my-10">
        <div className="card card-xl bg-base-200 w-full max-w-sm rounded-2xl shadow-xl hover:shadow-2xl">
          <div className="card-body">
            <h2 className="card-title block text-center text-lg mb-2">
              Sign up to DayBook
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="text-sm">
                <div>
                  <label htmlFor="firstname">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    className="input w-full rounded-lg my-3"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    id="lastname"
                    type="text"
                    className="input w-full rounded-lg my-3"
                    placeholder="Optional"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input w-full rounded-lg my-3"
                    placeholder="Email address"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
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
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full rounded-lg my-3"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing up..." : "Sign up"}
                </button>
              </div>
            </form>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-red-500 hover:font-bold">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;

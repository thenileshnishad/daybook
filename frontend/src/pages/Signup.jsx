import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignupMutation } from "../redux/api/usersApiSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signup, { isLoading, error }] = useSignupMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData).unwrap();
      alert("Success");
    } catch (error) {
      alert("Failed");
    }
  };
  console.log(import.meta.env.VITE_BACKEND_URL); // Should print the URL defined in your .env file

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px-52px)]">
      <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title block text-center">Sign up to DayBook</h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset w-xs p-2 pl-6">
              <label htmlFor="firstname" className="fieldset-label mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstname"
                type="text"
                className="input mb-2"
                placeholder="Enter your first name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
              />

              <label htmlFor="lastname" className="fieldset-label mb-1">
                Last Name
              </label>
              <input
                id="lastname"
                type="text"
                className="input mb-2"
                placeholder="Enter your last name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />

              <label htmlFor="email" className="fieldset-label mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="input mb-2"
                placeholder="Email address"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />

              <label htmlFor="password" className="fieldset-label mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Sign up
              </button>
            </fieldset>
          </form>

          <div className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-red-500 hover:font-bold">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;

import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px-52px)]">
      <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title block text-center">Sign up to DayBook</h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset w-xs p-2 pl-6">
              <label htmlFor="firstname" className="fieldset-label mb-1">
                Name
              </label>
              <input
                id="firstname"
                type="text"
                className="input mb-2"
                placeholder="Enter name"
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
                placeholder="Enter last name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />

              <label htmlFor="email" className="fieldset-label mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input mb-2"
                placeholder="Enter email"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />

              <label htmlFor="password" className="fieldset-label mb-1">
                Password
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

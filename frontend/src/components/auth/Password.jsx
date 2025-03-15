import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useChangePasswordMutation } from "../../redux/api/usersApiSlice";
import { toast } from "react-toastify";

const Password = ({ close }) => {
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user?.data?.email);
      setFirstName(user?.data?.firstName);
    }
  }, [user]);

  useEffect(() => {
    setOldPassword("");
    setNewPassword("");
  }, [close]);

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await changePassword({
        oldPassword,
        newPassword,
      }).unwrap();
      toast.success(response?.message);
      close();
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="card-body">
      <h2 className="card-title block text-center text-lg mb-2">
        Change your password
      </h2>

      <p className="text-center text-error">{email}</p>
      <div className="text-center my-3">
        <p>
          Hello {firstName}, for security reasons, you must confirm your old
          password before setting a new one. Please enter your current password
          below to proceed with updating your account credentials. Thank you!
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-5 justify-center items-center">
          <div>
            <label htmlFor="oldPassword">
              Old Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="oldPassword"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="input rounded-lg my-3"
              placeholder="Current password"
            />
          </div>

          <div>
            <label htmlFor="newPassword">
              New Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="input rounded-lg my-3"
              placeholder="New password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full rounded-lg mt-3"
          disabled={isLoading}
        >
          {isLoading ? "Changing..." : "Change Password"}
        </button>
      </form>
    </div>
  );
};
export default Password;

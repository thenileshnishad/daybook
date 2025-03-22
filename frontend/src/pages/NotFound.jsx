import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="hero bg-base-200 min-h-[calc(100dvh-64px-52px)]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops! Page Not Found (404)</h1>
          <p className="py-6">
            Sorry, but the page you're looking for doesn't exist. It may have
            been moved or deleted, or you may have typed the URL incorrectly.
          </p>
          <button onClick={handleClick} className="btn btn-primary">
            Go back to the homepage
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;

const Loader = () => {
  const getTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "dark";

  return (
    <div data-theme={getTheme} className="flex min-h-screen justify-center">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};
export default Loader;

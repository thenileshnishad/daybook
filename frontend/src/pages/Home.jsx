import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100svh-64px-40px)] relative">
        <div className="text-center py-10 max-w-3xl mx-4">
          {user ? (
            <>
              <h1 className="text-3xl xl:text-5xl font-bold text-primary">
                Welcome Back, {user.data.firstName}
              </h1>
              <p className="text-lg mt-4">
                Hey! Great to have you back 😊 Your entries are safe, private,
                and always within reach. No rules just your thoughts, your way.
                Keep writing, keep growing! 🚀✨
              </p>
              <Link to="/entries" className="btn btn-primary mt-6">
                Go to Your Entries
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-3xl xl:text-5xl font-bold text-primary">
                Welcome to DayBook
              </h1>
              <p className="text-lg mt-4">
                Hey! Great to have you here 😊 Log in to keep your entries safe,
                private, and always within reach. Write freely, your thoughts
                your way! 🚀✨
              </p>
              <Link to="/entries" className="btn btn-primary mt-6">
                Get Started
              </Link>
            </>
          )}
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <span className="text-gray-500 text-sm">
            Scroll down to discover more ↓
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-[calc(100svh-64px-40px)]">
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center pb-2">
            Working & Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-10 my-10">
            <div>
              <h3 className="text-xl font-semibold text-center md:text-left">
                Getting Started is Simple
              </h3>
              <div className="mt-6 space-y-6">
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">1. Sign Up</h4>
                  <p className="text-gray-500">
                    Create a free account to start your journey. Your data is
                    securely stored, ensuring your private thoughts remain
                    personal.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">2. Start Writing</h4>
                  <p className="text-gray-500">
                    Write freely without limitations. Capture your emotions and
                    document important events, and revisit them anytime.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">3. Manage Profile</h4>
                  <p className="text-gray-500">
                    Update your first name, last name, and change your password
                    to keep your account secure and personalized.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center md:text-left">
                Features Designed for You
              </h3>
              <div className="mt-6 space-y-6">
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">Daily Journaling</h4>
                  <p className="text-gray-500">
                    Develop a daily habit of writing and reflecting. The more
                    you write, the more you understand yourself.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">Entry Management</h4>
                  <p className="text-gray-500">
                    Easily add, edit, and delete entries while keeping your
                    thoughts organized. You can also set or change entry dates
                    anytime.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">Secure & Private</h4>
                  <p className="text-gray-500">
                    Your entries are stored securely on the cloud, ensuring that
                    no data is lost. Manage your profile details safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

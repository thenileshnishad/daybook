import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100svh-64px-40px)] relative">
        <div className="text-center py-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-primary">
            Welcome to DayBook
          </h1>
          <p className="text-lg mt-4">
            DayBook is your private space to write and reflect. Journaling helps
            clear your mind, track your thoughts, and grow every day. Start your
            journey with a simple and secure way to record your daily moments.
          </p>
          <Link to="/entries" className="btn btn-primary mt-6">
            Get Started
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="text-gray-500 text-sm">
            Scroll down to discover more ↓
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center pb-5">
            Working & Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-xl font-semibold text-center md:text-left">
                Getting Started is Easy
              </h3>
              <div className="mt-6 space-y-6">
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">1. Sign Up</h4>
                  <p className="text-gray-500">
                    Create an account and log in securely. Enjoy a hassle-free
                    sign-up process.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">2. Start Writing</h4>
                  <p className="text-gray-500">
                    Add, edit, and delete entries effortlessly. Capture thoughts
                    seamlessly and revisit them anytime.
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
                Powerful Features
              </h3>
              <div className="mt-6 space-y-6">
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">Daily Journaling</h4>
                  <p className="text-gray-500">
                    Write and reflect on your daily experiences effortlessly,
                    creating a rich record of your journey.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">Entry Management</h4>
                  <p className="text-gray-500">
                    Easily add, edit, and delete entries while keeping
                    your thoughts organized. You can also set or change entry
                    dates anytime.
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

      <div className="flex justify-center items-center">
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold">Start Your Journey Today</h2>
          <p className="mt-4 text-lg">
            Begin your journey with DayBook, your personal space to write and
            reflect. Create a habit of journaling and take control of your daily
            thoughts and tasks.
          </p>
          <Link to="/signup" className="btn btn-primary mt-6">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

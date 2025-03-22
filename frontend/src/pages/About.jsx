const About = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 my-10">
      <div className="w-full max-w-3xl bg-base-200 shadow-xl hover:shadow-2xl rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-7">About DayBook</h1>
        <p className="text-lg text-center mb-4">
          DayBook is a secure and trusted digital journal that protects your
          thoughts and memories. Built for simplicity and reliability, it allows
          you to document your experiences with ease. DayBook prioritizes
          privacy and a distraction-free experience, ensuring your journaling
          stays personal, secure, and meaningful.
        </p>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">What You Can Do</h2>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>✅</span>
            <span>
              <strong>Write & Manage Entries:</strong> Effortlessly create,
              edit, and delete daybook entries while keeping them safe.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📅</span>
            <span>
              <strong>Track Your Memories:</strong> Capture experiences from any
              date, ensuring your journey is well-documented.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🎨</span>
            <span>
              <strong>Personalize Your Profile:</strong> Customize your identity
              while maintaining account security.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🔒</span>
            <span>
              <strong>Advanced Security Features:</strong> Protect your daybook
              entries with encrypted authentication, strong passwords, and
              secure cookies.
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">Tech Stack</h2>
        <p className="text-lg text-center mb-4">
          Built with modern technologies to ensure a <strong>secure</strong> and
          <strong> efficient</strong> journaling experience:
        </p>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>⚛️</span>
            <span>
              <strong>Frontend:</strong> React.js with DaisyUI & TailwindCSS
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🖥️</span>
            <span>
              <strong>Backend:</strong> Node.js & Express.js
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🔑</span>
            <span>
              <strong>Auth:</strong> JWT with secure HTTP cookies
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📡</span>
            <span>
              <strong>State:</strong> Redux Toolkit (RTK) & RTK Query
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🗄️</span>
            <span>
              <strong>Database:</strong> MongoDB with server-side validation
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <p className="text-lg text-center">
          Start your journaling journey with <strong>DayBook</strong> - where
          your memories are <strong>secure</strong>, <strong>personal</strong>,
          and always accessible.
        </p>

        <div className="text-center mt-5">
          <a href="https://github.com/thenileshnishad/daybook" target="_blank">
            <button className="btn btn-primary">
              Explore the Code on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

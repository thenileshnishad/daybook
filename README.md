# DayBook

DayBook is a secure and user-friendly personal journaling app built with the MERN stack (MongoDB, Express, React, and Node.js). It allows users to easily log in, write, view, and manage their daily entries while ensuring a seamless, distraction-free, and private experience. Prioritizing simplicity, security, and privacy, DayBook helps you document your thoughts and memories with confidence and peace of mind.

[Live Demo](https://daybook-mern.vercel.app)

Head over to the [Vercel deployment branch](https://github.com/thenileshnishad/daybook/tree/deployment) if you want to see how the deployment is set up (you can find the relevant details in their `package.json` file).

---

## 📚 Table of Contents

1. [**Features**](#1-features)
2. [**Tech Stack**](#2-tech-stack)
3. [**Project Structure**](#3-project-structure)
4. [**Installation**](#4-installation)
   - [**Backend Setup**](#backend-setup)
   - [**Frontend Setup**](#frontend-setup)
5. [**API Endpoints**](#5-api-endpoints)
6. [**Contributing**](#6-contributing)

---

## 1. Features

- **User Authentication:** Secure login and registration system.
- **Journal Entries:** Create, read, update, and delete personal daily entries.
- **Responsive UI:** Built with React for a smooth user experience.
- **RESTful API:** Powered by Express and Node.js for backend operations.
- **Data Persistence:** MongoDB used to store user data and journal entries securely.

---

## 2. Tech Stack

- **Frontend**: React.js with TailwindCSS & DaisyUI for modern, responsive UI design.
- **Backend**: Node.js with Express.js for handling server-side logic and API requests.
- **Authentication**: JWT (JSON Web Tokens) with HTTP-only secure cookies for safe and efficient user authentication.
- **Database**: MongoDB with Mongoose for schema validation and seamless database interactions.
- **State Management & API Calls**: Redux Toolkit (RTK) and RTK Query for efficient state management, data fetching, and caching.
- **Deployment**: Vercel for seamless deployment and hosting of the live demo.

---

## 3. Project Structure

The repository is divided into two main directories:

```
daybook/
├── backend/                                # All the server files
│   ├── src/                                # Source code for the backend
│   │   ├── config/                         # Configuration file for database
│   │   │   └── database.js                 # Database connection setup
│   │   ├── controllers/                    # Handles request and business operations
│   │   │   ├── authController.js           # Handles auth logic (signup, login, logout, password)
│   │   │   ├── userController.js           # Handles user-related operations (view profile, updates)
│   │   │   └── entryController.js          # Handles entry ops (create, read, update, search, delete)
│   │   ├── middleware/                     # Middleware file for authentication
│   │   │   └── authMiddleware.js           # Middleware for authentication and authorization
│   │   ├── models/                         # Database models (schema definitions)
│   │   │   ├── entryModel.js               # Defines the structure of daybook entries
│   │   │   └── userModel.js                # Defines the structure of user data
│   │   ├── routes/                         # Files for API routes for the backend
│   │   │   ├── authRoutes.js               # Routes related to authentication
│   │   │   ├── entryRoutes.js              # Routes for daybook entry operations
│   │   │   └── userRoutes.js               # Routes for user-related operations
│   │   ├── utils/                          # Utility/helper functions
│   │   │   └── generateToken.js            # To generate JSON Web Tokens (JWTs) and response cookies
│   │   └── index.js                        # The main entry point for the Node.js server
│   ├── .env.example                        # Example environment variable file
│   ├── .gitignore                          # Specifies files and directories to be ignored by Git
│   ├── package-lock.json                   # Records the exact versions of installed npm packages
│   └── package.json                        # Defines project metadata and dependencies
│
├── frontend/                               # React.js client-side code
│   ├── public/                             # Static assets served directly by the browser
│   │   ├── daybook-image.jpg               # Application banner image
│   │   └── logo.svg                        # Application logo for direct serving
│   ├── src/                                # React application's source code
│   │   ├── assets/                         # Static processed assets
│   │   │   └── logo.svg                    # Application logo used in application
│   │   ├── components/                     # Reusable UI components
│   │   │   ├── auth/                       # Authentication-related components
│   │   │   │   ├── Logout.jsx              # Component for user logout confirmation
│   │   │   │   ├── Password.jsx            # Component for changing the password
│   │   │   │   └── Profile.jsx             # Component for user profile display and editing
│   │   │   ├── entry/                      # Journal entry-related components
│   │   │   │   ├── AddEntry.jsx            # Component for adding new entries
│   │   │   │   ├── DeleteEntry.jsx         # Component for deleting entries
│   │   │   │   ├── EditEntry.jsx           # Component for editing entries
│   │   │   │   ├── EntryCard.jsx           # Component for displaying an entry
│   │   │   │   └── ReadMore.jsx            # Component to expand and read full entries
│   │   │   ├── navbar/                     # Navigation bar components
│   │   │   │   ├── Navbar.jsx              # Main navigation bar component
│   │   │   │   ├── NavLinks.jsx            # Navigation links component
│   │   │   │   ├── NavProfile.jsx          # User profile display within the navbar
│   │   │   │   └── SearchBox.jsx           # Search functionality within the navbar
│   │   │   ├── Footer.jsx                  # Application footer component
│   │   │   ├── Layout.jsx                  # Layout component for structuring UI
│   │   │   ├── Loader.jsx                  # Loading indicator component
│   │   │   ├── ModalLayout.jsx             # Modal component for displaying pop-up content
│   │   │   └── ThemeController.jsx         # Component to manage the application's theme
│   │   ├── pages/                          # Application pages (views)
│   │   │   ├── About.jsx                   # About page describing the application
│   │   │   ├── Entries.jsx                 # Page displaying all journal entries
│   │   │   ├── Home.jsx                    # Home page with an overview of the application
│   │   │   ├── Login.jsx                   # Login page where users can enter credentials
│   │   │   └── Signup.jsx                  # Signup page allowing new users to register
│   │   ├── redux/                          # Redux state management files
│   │   │   ├── api/                        # Redux Toolkit Query API slices
│   │   │   │   ├── apiSlice.js             # Base API slice configuration
│   │   │   │   ├── entriesApiSlice.js      # API slice for daybook entries
│   │   │   │   └── usersApiSlice.js        # API slice for user data
│   │   │   ├── features/                   # Redux feature slices
│   │   │   │   └── userSlice.js            # Redux slice for user state management
│   │   │   └── store.js                    # Redux store configuration
│   │   ├── App.css                         # Global CSS styles
│   │   ├── App.jsx                         # Main application component
│   │   └── main.jsx                        # Entry point for the React application
│   ├── .env.example                        # Example environment variable file for the frontend
│   ├── .gitignore                          # Specifies files and directories to be ignored by Git
│   ├── eslint.config.js                    # ESLint configuration file
│   ├── index.html                          # HTML entry point for the React application
│   ├── package-lock.json                   # Records the exact versions of installed npm packages
│   ├── package.json                        # Defines project metadata and dependencies
│   └── vite.config.js                      # Vite build tool configuration
└── README.md                               # Documentation about the project
```

- **backend:** Contains all server-side code including API endpoints, middleware, and database connections.
- **frontend:** Contains all client-side code responsible for the user interface and client logic.

---

## 4. Installation

Follow these steps to set up the project locally:

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/thenileshnishad/daybook.git

   cd daybook/backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `backend` directory and set the variables accordingly:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/daybook
   JWT_SECRET=rushB@5678
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the backend server:**

   ```bash
   npm start
   # or
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the root directory (daybook, not backend):**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variable:**

   Create a `.env` file in the `frontend` directory and set the variable accordingly:

   ```
   VITE_BACKEND_URL=http://localhost:3000
   ```

4. **Start the React development server:**

   ```bash
   npm run dev
   ```

The app should now be running locally. `By default`:

- The frontend runs on [http://localhost:5173](http://localhost:5173)
- The backend runs on [http://localhost:3000](http://localhost:3000)

---

## 5. API Endpoints

| **Method** | **Endpoint**                | **Description**                                                                                                                                                                                          |
| :--------- | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST       | `/api/auth/signup`          | Registers a new user by saving their email and hashed password to the MongoDB database. After that a JWT token is returned and stored in an HTTP-only secured cookie, automatically logging the user in. |
| POST       | `/api/auth/login`           | Authenticates the user with their provided credentials (email and password). If successful, a JWT token is returned and stored in an HTTP-only secured cookie, providing access to protected resources.  |
| POST       | `/api/auth/logout`          | Logs out the user by setting the JWT token stored in the HTTP-only cookie as null and setting its expiration now, effectively invalidating the user's token cookie.                                      |
| GET        | `/api/users/me`             | Retrieves the current user's information (email, first name, last name) based on the authenticated session. This request requires the user to be logged in.                                              |
| PUT        | `/api/users/me`             | Allows the logged-in user to update their personal details, such as first name, last name, while keeping the rest of their account intact.                                                               |
| PUT        | `/api/auth/change-password` | Enables the user to change their password. The request requires both the old password (for verification) and the new password, updating the password in the database after successful verification.      |
| POST       | `/api/entries`              | Adds a new entry to the database. The request body must include the necessary details for the entry (date, title, mood, content). Only authenticated users can add entries.                              |
| GET        | `/api/entries`              | Retrieves all entries stored in the database. This is typically used by the user to view a list of all their entries. Requires the user to be authenticated.                                             |
| GET        | `/api/entries/:id`          | Retrieves a specific entry based on its unique ID. The ID should be passed as a parameter in the URL, and only the entry corresponding to that ID will be returned.                                      |
| PATCH      | `/api/entries/:id`          | Updates an existing entry specified by its ID. The request body must include the fields that need to be updated (date, title, mood, content). Only the owner of the entry can modify and see it.         |
| DELETE     | `/api/entries/:id`          | Deletes the entry specified by its ID. Only the user who created the entry is authorized to delete or see it. The entry will be permanently removed from the database.                                   |
| GET        | `/api/entries/search?text=` | Searches for entries that match the given search text in either the title or the description. The search query parameter text should contain the keyword(s) you want to search for.                      |

---

## 6. Contributing

Contributions are welcome! If you'd like to improve DayBook, please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add some feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeature
   ```

5. Open a pull request detailing your changes.

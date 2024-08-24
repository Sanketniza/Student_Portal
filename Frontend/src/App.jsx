
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import { Toaster } from "./components/ui/sonner";
import Jobs from "./components/Jobs";
import Browser from "./components/Browser";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";

// &-----------------------------------------------------------------------------------------------

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/jobs",
    element: <Jobs />,
  },

  {
    path:"/description/:id",
    element: <JobDescription />
  },

  {
    path: "/browser",
    element: <Browser />,
  },

  {
    path: "/profile",
    element:<Profile/>
  }

]);

// &-----------------------------------------------------------------------------------------------

function App() {
    return (
        <>
          <RouterProvider router={appRouter} />
          <Toaster />
        </>
    );
}

export default App;

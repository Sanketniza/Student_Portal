import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import { Toaster } from "./components/ui/sonner";

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
]);


function App() {
   return (
        <>
          <RouterProvider router={appRouter} />
          <Toaster />
        </>
   );
}

export default App;

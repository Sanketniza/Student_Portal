import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";

const appRouter = createBrowserRouter([
  {
     path: "/",
     element: <Home />,
  } ,
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
       {/* <Navbar/> */}
     </>
   );
}

export default App;

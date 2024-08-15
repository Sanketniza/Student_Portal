
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Navbar from './components/shared/Navbar'

const appRouter = createBrowserRouter([

    {
       path: '/',
       element: <Navbar />
    },

    {
       path: '/login',
       element: <Login />
    },

    {
       path: '/signup',
       element: <Signup />
    },
])

function App() {

  return (
    <>
       <RouterProvider router={appRouter} />
    </>
  )
}

export default App

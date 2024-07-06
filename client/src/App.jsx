import { Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is home!</div>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/Write",
    element: <Write/>,
  },
  {
    path: "/Single",
    element: <Single/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

const Layout = () => {
  return (
    <>
     <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

export default App;

import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Footer from "./components/footer";
import "../../client/src/style.scss";

const Layout = () => {
  return (
  <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>,
      },
      {
        path:"/post/:id",
        element:<Single/>,
      },
      {
        path:"/write",
        element:<Write/>,
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Write",
    element: <Write />,
  },
  {
    path: "/Single",
    element: <Single />,
  },
]);

function App() {
  return (
    <div className="App">
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

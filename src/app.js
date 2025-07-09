import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
        errorElement: <Error />,
      },
      {
        path: "/CartItems",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);

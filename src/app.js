import React, { lazy, Suspense, use } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
import ResMenuCard from "./components/ResMenuCard.js";
import UserContext from "../utils/UserContext.js";

//lazy loading
const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
  const [user, setUser] = useState("SamarthSaxena");
  return (
    <UserContext.Provider value={{ LoggedInUser: user, setUser }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading . . . . .</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenuCard />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/CartItems",
        element: <Cart />,
      },

      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading . . . . .</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);

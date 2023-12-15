import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import NewsDet from "./pages/Home/NewsDet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Error</p>,
  },
  {
    path: "/news/:objectID",
    element: <NewsDetails />,
  },
  {
    path: "/feature/:_id",
    element: <NewsDet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);

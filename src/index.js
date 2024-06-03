import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

//pages
import EcommercePage from "./pages/E-commerce";
import TesteDePerformanceESEO from "./pages/TesteDePerformanceESEO"

const router = createBrowserRouter([
  {
    path: "/",
    element: <EcommercePage />,
  },
  {
    path: "/teste",
    element: <TesteDePerformanceESEO/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="page-container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

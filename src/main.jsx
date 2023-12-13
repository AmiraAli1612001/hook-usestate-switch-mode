import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import { ThemeProvider } from "./context/contextdata.jsx";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
    elementError: `<h1>Error 404</h1>`,
  },
  {
    path: "/",
    element: <App />,
    elementError: `<h1>Error 404</h1>`,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

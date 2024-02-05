import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ciphers } from "./Ciphers";
import { Sidebar } from "./Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  ...ciphers.map((cipher) => ({
    path: cipher.path,
    element: (
      <div className="flex max-sm:flex-col">
        <Sidebar />
        <main className="px-4 py-2">{cipher.element}</main>
      </div>
    ),
  })),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

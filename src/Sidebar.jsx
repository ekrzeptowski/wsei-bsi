import React from "react";
import { Link } from "react-router-dom";
import { ciphers } from "./Ciphers";

export const Sidebar = () => {
  return (
    <div className="flex flex-wrap px-2 py-2 shadow sm:min-h-screen sm:flex-col sm:border sm:border-r-primary-100">
      {ciphers.map((cipher) => (
        <Link
          key={cipher.name}
          to={cipher.path}
          className="mb-2 rounded-lg border border-primary-600 px-4 py-2 text-primary-600 shadow hover:bg-primary-600 hover:text-primary-50 max-sm:mr-2"
        >
          {cipher.name}
        </Link>
      ))}
    </div>
  );
};

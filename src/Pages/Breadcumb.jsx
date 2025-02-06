import React from "react";
import { Link } from "react-router";
import Translate from "../utils/Translate";

const Breadcrumb = ({ carname }) => {
  return (
    <nav className="text-gray-600 text-sm">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-gray-800 hover:text-[#ff9540]">
            <Translate text="Home" />
          </Link>
        </li>
        <li className="text-orange-400">›</li>
        <li>
          <Link to="/listing" className="text-gray-800 hover:text-[#ff9540]">
            {" "}
            <Translate text="Search Results" />
          </Link>
        </li>
        <li className="text-orange-400">›</li>
        <li className="text-gray-900 font-semibold">{carname}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

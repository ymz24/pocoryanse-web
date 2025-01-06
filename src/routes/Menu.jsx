import React from "react";
import "../App.css";

import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="dropdown fixed left-0 z-10">
            <svg
                className="fill-current fill-black btn btn-ghost btn-square"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
                tabIndex={0}
                role="button">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/History">History</Link></li>
                <li><Link to="/Movies">Movies</Link></li>
                <li><Link to="/Members">Members</Link></li>
            </ul>
        </div>
    );
}

export default Menu;
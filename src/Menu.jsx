import React from "react";
import "./App.css";

const Menu = () => {
    return (
        <div className="drawer fixed z-1000">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <label className="btn swap swap-rotate" htmlFor="my-drawer">
                <input type="checkbox" />
                <svg
                    className="swap-off fill-current fill-white bg-opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
            </label>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                Pocoryanse
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
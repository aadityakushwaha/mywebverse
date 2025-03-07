import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from 'react-router-dom';


export function Sidebar({ handleLogout,...props }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Code to handle form submission and obtain the token...

        // Store token and user type in browser's localStorage
        handleLogout();
        navigate('/signin');
    };
    const menus = props.dataarr;
    console.log(props.dataarr);
    const [open, setOpen] = useState(true);
    return (
        <div
            className={` min-h-screen sidebar ${open ? "w-72" : "w-16"
                } duration-500 text-gray-100 px-4`}
        >
            <div className="py-3 flex justify-end">
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative backdrop-filter backdrop-blur-lg bg-opacity-5">
                {menus?.map((menu, i) => (
                    <Link
                        to={menu?.link}
                        key={i}
                        className={` ${menu?.margin && "mt-5"
                            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                    >
                        <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${i + 3}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                        >
                            {menu?.name}
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            {menu?.name}
                        </h2>
                    </Link>
                ))}

            </div>
            {
                open ? <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-80" onClick={handleClick}>Logout</button>
                    : <></>
            }
        </div>


    );
};

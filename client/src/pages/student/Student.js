import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import ProfilePage from "../../components/profile/Profile";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import "./style.css";
import { useNavigate } from 'react-router-dom';
function Student({ handleLogout }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleSidebarCollapse = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    const menus = [
        { name: "dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "Leave", link: "/leave", icon: AiOutlineUser, margin: true },
        { name: "complaint", link: "/complaint", icon: FiMessageSquare },
        { name: "room details", link: "/roomdetails", icon: TbReportAnalytics },
        { name: "mess change", link: "/messchange", icon: FiFolder },
        { name: "course", link: "/course", icon: FiShoppingCart },
        { name: "events", link: "/events", icon: AiOutlineHeart },
    ];

    
    return (
        <div className={`grid ${isSidebarCollapsed ? "grid-cols-1" : "grid-cols-3"}`}>
            {!isSidebarCollapsed && (
                <div className="col-span-1">
                    <Sidebar handleLogout={handleLogout} dataarr={menus} />
                </div>
            )}
            <div className="col-span-1 lg:col-span-2">
                <ProfilePage role = "student"/>
            </div>
            {isSidebarCollapsed && (
                <button
                    className="fixed top-0 left-0 mt-4 ml-4 bg-gray-200 p-2 rounded"
                    onClick={handleSidebarCollapse}
                >
                    Expand Sidebar
                </button>
            )}
        </div>
    );
}

export default Student;

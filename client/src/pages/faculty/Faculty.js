import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import ProfilePage from "../../components/profile/Profile";
import { MdOutlineDashboard } from "react-icons/md";

function Faculty({handleLogout}) {
    const menus = [
        { name: "dashboard", link: "/faculty", icon: MdOutlineDashboard },
        {name: "Courses",link: "/courses",icon : MdOutlineDashboard,margin:true},
        {name: "Events",link: "/events",icon: MdOutlineDashboard}
    ];
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleSidebarCollapse = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    return (
        <div className={`grid ${isSidebarCollapsed ? "grid-cols-1" : "grid-cols-3"}`}>
            {!isSidebarCollapsed && (
                <div className="col-span-1">
                    <Sidebar handleLogout={handleLogout} dataarr = {menus}/>
                </div>
            )}
            <div className="col-span-1 lg:col-span-2">
                <ProfilePage />
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

export default Faculty;

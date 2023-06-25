import React from "react";
import Sidebar from './Sidebar';
import Sidebarcontent from "./Sidebarcontent";
import "../style.css/sidebar.css";

function Dashboard(){
    return(
        <>
            <div className="dashboard">
                <Sidebar/>
                <Sidebarcontent/>
            </div>
           
        </>
    );
}
export default Dashboard;
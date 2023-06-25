import React from "react";
import '../style.css/sidebarcontent.css';
import Cards from './Cards';
import Graph from "./Graph";
import Footer from "./Footer"
function Sidebarcontent() {
    return (
        <>
            <div className="w-full">
                <div className=" w-full">
                    <div className=" nav justify-between ">
                        <h1 className="mr-5 text-3xl ">Dashboard</h1>

                        <div className="right">

                            <div className=" flex mr-3">
                                <input type="text" placeholder="Search" className="search py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-500  lg:block hidden " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 search-btn">
                                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                                </svg>

                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 noti">
                                <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z" clip-rule="evenodd" />
                            </svg>

                            <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                                className="rounded-full avatar"
                                alt=""
                                loading="lazy" />
                        </div>

                    </div>
                    <div>
                        <Cards />
                        <Graph />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidebarcontent;
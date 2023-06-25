import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import '../style.css/graph.css';

function Footer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.jsonkeeper.com/b/9GSC");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

    return (
        <>
            <div className="container my-5 mx-auto md:px-6">
                <section className="graph1">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:gap-x-12">
                        <div className="mb-2 lg:mb-0">
                            <div className="block border rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                <div className="flex relative justify-between">
                                        <p className="mb-6 text-left text-xl">
                                            <strong>Total Product</strong>
                                        </p>
                                        <p className="mt-2 card8 text-xs">May - June 2021</p>
                                    </div>
                                    <div className="piechart">
                                        <div className="my-1">
                                            <PieChart width={200} height={170}>
                                                <Pie
                                                    data={data}
                                                    dataKey="stock"
                                                    nameKey="title"
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={80}
                                                    fill="#8884d8"

                                                >
                                                    {data.map((entry, index) => (
                                                        <Cell key={entry.id} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                        </div>

                                        <div >
                                            <div className="flex">
                                            <div className="mt-3 dot "></div>
                                            <div >
                                                <h3 className="pietext">
                                                    <strong> BasicTrees</strong></h3>
                                                <p className="card7 mt-1 text-left ml-3 ">55%</p>
                                            </div>
                                            </div>
                                            <div className="flex">
                                            <div className="mt-3 dot1 "></div>
                                            <div >
                                                <h3 className="pietext">
                                                    <strong> Custom Short Pants</strong></h3>
                                                <p className="card7 mt-1 text-left ml-3 ">31%</p>
                                            </div>
                                            </div>
                                            <div className="flex">
                                            <div className="mt-3 dot2 "></div>
                                            <div >
                                                <h3 className="pietext">
                                                    <strong> Super Hoodies</strong></h3>
                                                <p className="card7 mt-1 text-left ml-3 ">14%</p>
                                            </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:mb-0">
                            <div className="block rounded-lg border bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                    <div className="flex relative justify-between">
                                        <p className="mb-6 text-left text-xl">
                                            <strong>Today’s schedule</strong>
                                        </p>
                                        <p className="mb-6 card8 text-xs">See All</p>
                                    </div>

                                    <div className="vl px-1">
                                        <p className="card6 text-xs text-left uppercase">
                                            <strong>Meeting with suppliers from Kuta Bali</strong>
                                        </p>
                                        <p className="card7 mt-1 text-xs text-left uppercase">14.00-15.00</p>
                                        <p className="card7 mt-1 mb-6 text-xs text-left uppercase">at Sunset Road, Kuta, Bali</p>
                                    </div>
                                    <div className="vl2 px-1">
                                        <p className="card6 mt-6 text-xs text-left uppercase">
                                            <strong>Check operation at Giga Factory 1</strong>
                                        </p>
                                        <p className="card7 mt-1 text-xs text-left uppercase">18.00-20.00</p>
                                        <p className="card7 mt-1 text-xs text-left uppercase">at Central Jakarta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Footer;

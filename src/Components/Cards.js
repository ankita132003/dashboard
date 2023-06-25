import React from "react";
import '../style.css/cards.css';


function Cards() {
    return (
        <>
            <div className="container lg:my-8 my-20 mx-auto md:px-6">
                <section className="card ">
                    <div className="grid gap-6 md:grid-cols-4  lg:grid-cols-4 xl:gap-x-12 ">
                        <div className="mb-2 lg:mb-0 ">
                            <div
                                className="block card1 border rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6  dark:border-opacity-10">
                                    <p className=" text-xl text-right mr-6">
                                        <svg className="inline w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path fill="color" d="M7 11V7a5 5 0 0 1 10 0v4m0 0v4a5 5 0 0 1-10 0v-4m0-4h10m2 0h2v8h-2m-2 0h-2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4h-2m-2 0H5V7a5 5 0 0 1 5-5z" />
                                        </svg>
                                    </p>
                                    <p className="mb-2 mt-4 card-text text-left text-xl">
                                        Total Revenues
                                    </p>
                                    <p className=" text-2xl xl:text-3xl text-left uppercase">
                                        <strong>$2,129,430</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-2 lg:mb-0">
                            <div
                                className="block card2 border rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                    <p className=" text-xl text-right mr-6">
                                    <svg className="inline w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path fill="color" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </p>
                                    <p className="mb-2 mt-4 text-left text-xl">
                                    Total Transactions
                                    </p>
                                    <p className=" text-2xl xl:text-3xl text-left uppercase">
                                        <strong>1,520</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-2 lg:mb-0">
                            <div
                                className="block card3 rounded-lg border bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                <p className=" text-xl text-right mr-6">
                                    <svg className="inline w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path fill="color" d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
                                        </svg>
                                        
                                    </p>
                                    <p className="mb-2 mt-4 text-left text-xl">
                                    Total Likes
                                    </p>
                                    <p className="text-2xl xl:text-3xl text-left uppercase">
                                        <strong>9,721</strong>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className=" lg:mb-0">
                            <div
                                className="block card4 border rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                <p className=" text-xl text-right mr-6">
                                    <svg className="inline w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path fill="color" d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                        </svg>
                                    </p>
                                    <p className="mb-2 mt-4 text-left text-xl">
                                    Total Users
                                    </p>
                                    <p className="text-2xl xl:text-3xl text-left uppercase">
                                        <strong>892</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    );
}
export default Cards;
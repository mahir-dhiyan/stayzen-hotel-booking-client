import React from 'react';
import { MdOutlineUnsubscribe } from "react-icons/md";
import newLetter from "../../../assets/mail-bird-svgrepo-com.svg"
const NewsLetterSign = () => {

    return (
        <>
            <div className="bg-[#ECECF2] dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold">Want <span className="text-[#C56652]">Updates, Deals, Exciting</span> Offers?</h2>
            </div>
            <section className="bg-[#ECECF2] text-black rounded-3xl dark:text-fuchsia-50 dark:bg-gray-700  py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl mb-2">
                        Stay Updated with Our Latest Offers
                    </h2>
                    <p className="text-xl mb-8">
                        Subscribe to our newsletter and get exclusive deals straight to your inbox!
                    </p>
                    <div className="flex flex-col-reverse   justify-between items-center">
                        <div className=" w-full">
                            <form className="mt-8 flex items-center  ">

                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-5 py-3 border-2  dark:bg-transparent  focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white focus:border-white  rounded-md"
                                />
                                <div className=" rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">

                                    <button className="btn btn-warning  text-white md:text-lg bg-[#A95543] border-none"><MdOutlineUnsubscribe className='hidden md:block' /> Subscribe</button>
                                </div>

                            </form>
                        </div>
                        <div className="w-56">
                            <img src={newLetter} alt="" />
                        </div>
                    </div>
                    <p className="mt-3 text-sm">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </section>
        </>
    );
};

export default NewsLetterSign;
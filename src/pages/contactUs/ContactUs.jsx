import React from 'react';
import { BsSendArrowDown } from "react-icons/bs";
import txtUs from "../../assets/chat-svgrepo-com.svg"
const ContactUs = () => {
    return (
        <div>
            <div className="bg-[#ECECF2] text-center mt-4 dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] ">
                <h2 className="text-5xl font-semibold">Contact<span className="text-[#C56652]"> Us</span></h2>
            </div>
            <div>

                <div className="container mx-auto p-4 pt-0 text-black dark:text-fuchsia-50 font-bold">
                    <h3 className="text-4xl font-bold text-center mt-6">Get in Touch with Us</h3>
                    <p className="text-xl text-center mt-4">
                        We are here to help you with any questions, bookings, or feedback related to your stay. Feel free to reach out to us, and we'll respond as quickly as possible.
                    </p>
                    {/*  */}

                    <div className="text-center space-y-2 mt-6">
                        <h4 className="text-3xl font-semibold">Our Location</h4>

                        <p className="text-lg">📍 StayZen 1234 Street Name, City, State, ZIP Code, Country</p>

                    </div>
                    <div className="text-center space-y-2 mt-6">
                        <h4 className="text-3xl font-semibold">Get in Touch</h4>
                        <p className="text-lg">Email: <a href="mailto:contact@realstate.com" className="text-blue-500">contact@realstate.com</a></p>
                        <p className="text-lg">Phone: <a href="tel:123-456-7890" className="text-blue-500">123-456-7890</a></p>
                    </div>
                </div>
            </div>
            <section className="bg-[#ECECF2] text-black rounded-3xl dark:text-fuchsia-50 dark:bg-gray-700  py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl mb-2">
                        Drop Us a Message for Any Query.<br></br> We will get back to you.
                    </h2>
                    <p className="text-xl mb-8">
                        If you have any inquiries or special requests, fill out the form below, and we'll get back to you promptly
                    </p>
                    <div className="flex flex-col-reverse   justify-between items-center">
                        <div className=" w-full">
                            <form className="mt-8  space-y-5 ">

                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-5 py-3 border-2  dark:bg-transparent  focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white focus:border-white  rounded-md"
                                />
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your query or message"
                                    className="w-full h-32 px-5 py-3 border-2  dark:bg-transparent  focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white focus:border-white  rounded-md"
                                />
                                <div className=" rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">

                                    <button className="btn btn-warning w-full text-white md:text-lg bg-[#A95543] border-none"><BsSendArrowDown className='hidden md:block ' /> Send</button>
                                </div>

                            </form>
                        </div>
                        <div className="w-56">
                            <img src={txtUs} alt="" />
                        </div>
                    </div>
                    <p className="mt-3 text-sm">
                        Your Satisfaction, Our Priority                    </p>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
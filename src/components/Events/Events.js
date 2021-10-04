import React from 'react';

import img from '../../images/Programming_challenge-e1522093628775-1280x640.jpg'
import './Events.css'

const Events = () => {
    return (
        <div className="mt-12 mb-12">

            <div className="mx-auto bg-gray-600 h-screen flex items-center justify-center px-8">
                <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
                    <div className="w-full h-64 bg-top bg-cover rounded-t events" ></div>
                    <div className="flex flex-col w-full md:flex-row">
                        <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                            <div className="md:text-3xl">Dec</div>
                            <div className="md:text-6xl">16</div>
                            <div className="md:text-xl">10 AM</div>
                        </div>
                        <div className="p-4 font-normal text-gray-800 md:w-3/4">
                            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">2021 Coding Championship</h1>
                            <p className="leading-normal">I’ve put together the following list of some of the most popular coding challenges where you can level up your skills for many programming roles. These range from popular data science to software development and mathematical modelling to computational chemistry. Most of them are annual competitions, but a few are continuous and anyone can participate at any time. These coding competitions are open so participants can use C, C++, Java, or C# .NET or any other programming languages in these contests. <br /> These contests offer young and talented students and programmers the opportunity to measure their capabilities and compare themselves to other programmers worldwide.</p>
                            <div className="flex flex-row items-center mt-4 text-gray-700">
                                <div className="w-1/2">
                                    Sponsored by: Programming-Hero <br />
                                    Mentor: Jhankar Mahmub
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    {/* <img src={ } alt="" className="w-8"></img> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Events;
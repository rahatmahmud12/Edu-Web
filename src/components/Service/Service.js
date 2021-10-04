import React from 'react';
import './Service.css'

const Service = (props) => {
    console.log(props.service)
    const { name, img, currentStudent, date } = props.service;
    return (
        <div className="each-service pb-5">
            <div className="w-full bg-gray-700 rounded-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-44 w-44" src={img} alt="photo"></img>
                </div>
                <div className="text-center">
                    <p className="text-xl text-gray-100 font-bold mb-2">{name}</p>
                    <p className="text-base text-white font-normal">Current students: {currentStudent}</p>
                    <p className="text-base text-white font-normal pt-6"> Starting Date: {date}</p>
                </div>
            </div>

        </div>
    );
};

export default Service;
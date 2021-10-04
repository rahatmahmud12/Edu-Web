import React from 'react';

const Istructor = () => {
    return (
        <div className="flex">
            <img className="ml-20 mb-20" src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"></img>
            <div className="w-2/5 ml-44 mt-32 mb-">
                <h2 className="text-4xl mb-6">Become an instructor</h2>
                <p className="w-25 text-xl mb-6">
                    Instructors from around the world teach millions of students on Edu-Web. We provide the tools and skills to teach what you love.</p>
                <button className="bg-gray-700 rounded px-3 py-2 text-white">Become An Instructor</button>
            </div>
        </div>
    );
};

export default Istructor;
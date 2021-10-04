import React from 'react';

const OneCourse = (props) => {
    const { name, age, img, date, currentStudent } = props.course

    console.log(props)
    return (
        <div>
            <div class="mx-auto px-4 py-8 max-w-xl my-20">
                <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                    <div class="md:flex-shrink-0">
                        <img src={img} alt="mountains" class="w-full h-64 rounded-lg rounded-b-none"></img>
                    </div>
                    <div class="px-4 py-2 mt-2">
                        <h2 class="font-bold text-2xl text-gray-800 tracking-normal mb-5">{name}</h2>
                        <p class="text-sm text-gray-700 px-2 mr-1">All the students: {currentStudent}

                            <br /> Starting date: {date}
                        </p>

                        <div class="author flex items-center -ml-3 my-3">
                            <div class="user-logo">

                            </div>
                            <h2 class="text-sm tracking-tighter text-gray-900 mx-auto mt-3">
                                <a href="#">By <span className="font-semibold">Jhankar Mahbub & Programming Hero Team</span></a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneCourse;
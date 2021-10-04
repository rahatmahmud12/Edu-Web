import React, { useState, useEffect } from 'react';
import OneCourse from '../OneCourse/OneCourse';
import Instructor from '../Instructor/Istructor';



const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('../../../FakeDb.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const expectedCourses = courses.slice(0, 3)


    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {
                    expectedCourses.map(course => <OneCourse course={course}></OneCourse>)
                }
            </div>


            <div>
                <Instructor></Instructor>
            </div>

        </div>
    );
};

export default Home;
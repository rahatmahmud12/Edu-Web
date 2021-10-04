import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('../../../FakeDb.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div>
            <h1 className="text-6xl mx-auto font-semibold text-green-600 mt-10">Our Upcoming Courses</h1>

            <div className="grid grid-cols-3 gap-4 ml-32 mt-14 mr-14">
                {
                    services.map(service => <Service service={service} ></Service>)

                }

            </div>
        </div>





    );
};

export default Services;
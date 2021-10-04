import React from 'react';
import img from '../../images/Enterprise_C4B_V2-crunch.png'
import './About.css'

const About = () => {
    return (
        <div className="flex about">
            <h1 className="details"><span className="company-name">Edu-Web Inc.</span> is an Bangladeshi massive open online course provider founded in 2020 by Dhaka University computer science Mr. kuddush kabir kha and Mr. Mofij Uddin kha. Edu-web works with universities and other organizations to offer online courses, certifications, and degrees in a variety of subjects </h1>

            <img src={img}></img>
        </div>
    );
};

export default About;
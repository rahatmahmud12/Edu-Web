import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faCopyright, faAddressBook, faSearch } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const element = <FontAwesomeIcon icon={faCopyright} />
    const elementTwo = <FontAwesomeIcon icon={faUserGraduate} />
    const elementThree = <FontAwesomeIcon icon={faAddressBook} />
    const elementFour = <FontAwesomeIcon icon={faSearch} />
    return (
        <div className=" flex bg-green-300 px-50 py-10">
            <h3 className="font-serif text-footer"> {elementTwo} Learn With Edu-Web And Get Yourself Ready For This Computer Era!</h3>
            <p className="font-mono copyright font-semibold font">{element} 2021, Edu-Web. All rights reserved</p>

        </div>
    );
};

export default Footer;
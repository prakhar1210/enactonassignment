
import React from 'react';
import ReactangleImage from "../../Albums/Rectangle 16.png";
import Group12Image from "../../Albums/Group 12.png";

const SignUp = () => {
    return (
        <div className="relative">
            <img
                src={ReactangleImage}
                alt='Signup Background'
                className="w-full h-auto"
            />
            <img
                src={Group12Image}
                alt="SignUp image"
                className="absolute inset-0 m-auto"
                style={{ width: '720px', height: '191px', left: '22px', }}
            />
        </div>
    )
}

export default SignUp;

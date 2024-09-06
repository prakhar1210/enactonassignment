import React from 'react';
import Image2 from "../../Albums/Image2.png.png";
import Image1 from "../../Albums/Image1.png.png";
import Image3 from "../../Albums/Image3.png.png";
import Image4 from "../../Albums/Image4.png.png";

const Grid = () => {
    return (
        <div className="grid grid-cols-2 gap-1" style={{ top: '2563px' }}>
            <img src={Image1} alt='Group1 image' className="w-full h-auto object-cover" />
            <img src={Image2} alt='Group1 image' className="w-full h-auto object-cover" />
            <img src={Image3} alt='Group1 image' className="w-full h-auto object-cover" />
            <img src={Image4} alt='Group1 image' className="w-full h-auto object-cover" />
        </div>
    )
}

export default Grid

import React from 'react';
import ContactDetails from "../../Albums/Group 10.png";
import FooterLine from "../../Albums/Rectangle 5.png";
import Signature from "../../Albums/Chef-Matt-horiz.png.png"

const Footer = () => {
    return (
        <div>
            <div>
                <img src={ContactDetails} alt='Contact Details' className='mb-5' />
                <img src={FooterLine} alt='Footer divider line' className="block mx-auto mt-4 gap-6" />
            </div>
            <div>
                <img src={Signature} alt='Chef Matt Signature' className='block mx-auto' />
            </div>
        </div>

    )
}

export default Footer

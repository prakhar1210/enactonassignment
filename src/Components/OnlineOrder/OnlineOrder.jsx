import React from 'react';
import Image49 from "../../Albums/Rectangle 7.png";
import OnlineShop from "../../Albums/Screenshot 2024-09-05 173156.png";

const OnlineOrder = () => {
    return (
        <div>
            <img src={Image49} alt='online order product' className="absolute" style={{ left: '300px', top: "1736px" }} />
            <div className="absolute"
                style={{
                    width: '234px',
                    height: '57px',
                    top: '1736px',
                    left: '669px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    opacity: '0', // This makes the text invisible as per your requirement
                }}>
                <div >
                    <img src={OnlineShop} alt='Online Shop Details' />
                </div>
                <button>Shop Now</button>
            </div>
        </div>
    )
}

export default OnlineOrder

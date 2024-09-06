
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import RightSlider from "../../Albums/Expand_right_double_light.png";
import LeftSlider from "../../Albums/Expand_left_double_light.png";
import Image45 from "../../Albums/Group 45.png";
import Image46 from "../../Albums/Group 46.png";
import Image47 from "../../Albums/Group 47.png";
import Image48 from "../../Albums/Group 48.png";

// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div className="relative" style={{ marginTop: "100px", marginLeft: "215px" }}>
            <Swiper
                spaceBetween={5} // Decrease space between slides
                slidesPerView={4} // Number of slides to show at once
                autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay settings
                loop={true} // Enable continuous loop mode
                modules={[Navigation, Pagination, Autoplay]} // Specify modules
                navigation={{ // Enable navigation buttons
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                pagination={{ clickable: true }} // Enable pagination
            >
                <SwiperSlide><img src={Image45} alt='image of the product' /></SwiperSlide>
                <SwiperSlide><img src={Image46} alt='image of the product' /></SwiperSlide>
                <SwiperSlide><img src={Image47} alt='image of the product' /></SwiperSlide>
                <SwiperSlide><img src={Image48} alt='image of the product' /></SwiperSlide>
            </Swiper>
            {/* Navigation Buttons */}
            <div className="swiper-button-next absolute top-1/2 right-4 z-10">
                <img src={RightSlider} alt='Next slide' className="cursor-pointer" />
            </div>
            <div className="swiper-button-prev absolute top-1/4 left-1/2 z-10">
                <img src={LeftSlider} alt='Previous slide' className="cursor-pointer" />
            </div>
        </div>
    );
}

export default Slider;
// 






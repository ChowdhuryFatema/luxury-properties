import PropTypes from 'prop-types';
// import { useState } from "react";
import ResidentialCard from "../ResidentialCard/ResidentialCard";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import 'styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Residential = ({ data }) => {

    console.log(data)
    return (
        <div className="bg-[#EDF1F2]">
            <div className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div>

                        <Swiper
                             effect={'coverflow'}
                             grabCursor={true}
                             centeredSlides={true}
                             slidesPerView={4}
                             coverflowEffect={{
                               rotate: 20,
                               stretch: 0,
                               depth: 100,
                               modifier: 1,
                               slideShadows: true,
                             }}
                             breakpoints={{
                                '@0.00': {
                                  slidesPerView: 1,
                                },
                                '@0.75': {
                                  slidesPerView: 1,
                                },
                                '@1.00': {
                                  slidesPerView: 1,
                                },
                                '@1.50': {
                                  slidesPerView: 4,
                                },
                              }}
                              pagination={{
                                clickable: true,
                              }}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"


                        >
                            {
                                data.map(item => <SwiperSlide key={item.id} >
                                    <ResidentialCard

                                        item={item}></ResidentialCard>
                                </SwiperSlide>)
                            }
                        </Swiper>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

Residential.propTypes = {
    data: PropTypes.array.isRequired,
}
export default Residential;
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Banner = () => {
    return (
        <div>
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            >
                <SwiperSlide>
                    <div className='slide slide1 min-h-[90vh]'>
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide slide2 min-h-[90vh]'>
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide slide3 min-h-[90vh]'>
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide slide4 min-h-[90vh]'>
                        Slide 1
                    </div>
                </SwiperSlide>
            </Swiper>
                     
        </div>
    );
};

export default Banner;
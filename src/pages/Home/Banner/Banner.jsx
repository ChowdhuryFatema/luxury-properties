// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { useRef } from 'react';

const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slide slide1'>
                      <div className='max-w-7xl mx-auto min-h-[90vh] px-5'>
                        slide 1
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide slide2 min-h-[90vh]'>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center slide slide3 min-h-[90vh]'>
                        Slide 333
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center slide slide4 min-h-[90vh]'>
                        Slide 444
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>

        </div>
    );
};

export default Banner;
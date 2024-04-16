// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { LuChevronRightCircle } from "react-icons/lu";

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
                    <div className='flex flex-col items-center border-2 slide slide1 min-h-[98vh] justify-center pt-20'>

                        <div className='overlay mt-10'></div>
                        <div className='space-y-3 slid-content text-center rounded-lg text-white z-40 px-5'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold opacity-100'>Awesome Family Retreat </h2>
                            <p className='text-lg md:text-xl'>Single-family Home, 2,500 sq ft</p>
                            <p className='text-3xl md:text-4xl py-2'>$550,000</p>
                            <button className='font-semibold bg-[#23BE0A] hover:bg-[#62a812] btn text-white border-0 rounded-none'><LuChevronRightCircle size={20} />View Details</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center border-2 slide slide2 min-h-[98vh] justify-center pt-20'>

                        <div className='overlay mt-10'></div>
                        <div className='space-y-3 slid-content text-center rounded-lg text-white z-40 px-5'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold opacity-100'>Downtown Luxury Apartment </h2>
                            <p className='text-lg md:text-xl'>101 Main Street, City Center, USA</p>
                            <p className='text-3xl md:text-4xl py-2'>$3,000</p>
                            <button className='font-semibold bg-[#23BE0A] btn text-white border-0 rounded-none'><LuChevronRightCircle size={20} />View Details</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center border-2 slide slide3 min-h-[98vh] justify-center pt-20'>

                        <div className='overlay mt-10'></div>
                        <div className='space-y-3 slid-content text-center rounded-lg text-white z-40 px-5'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold opacity-100'>Urban Townhouse Living</h2>
                            <p className='text-lg md:text-xl'>789 Elm Street, Metropolitan City, USA</p>
                            <p className='text-3xl md:text-4xl py-2'>$700,000</p>
                            <button className='font-semibold bg-[#23BE0A] btn text-white border-0 rounded-none'><LuChevronRightCircle size={20} />View Details</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center border-2 slide slide4 min-h-[98vh] justify-center pt-20'>

                        <div className='overlay mt-10'></div>
                        <div className='space-y-3 slid-content text-center rounded-lg text-white z-40 px-5'>
                            < h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold opacity-100'>Luxury Downtown Penthouse</h2>
                            <p className='text-lg md:text-xl'>555 High Street, Urban Center, USA</p>
                            <p className='text-3xl md:text-4xl py-2'>$5,500</p>
                            <button className='font-semibold bg-[#23BE0A] btn text-white border-0 rounded-none'><LuChevronRightCircle size={20} />View Details</button>
                        </div>

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
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import slider1 from '../../../assets/h1.jpeg';
import slider2 from '../../../assets/h2.jpeg';
import slider3 from '../../../assets/h3.jpeg';
import slider4 from '../../../assets/h5.jpeg';
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';
const Header = () => {
    return (
        <>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper md:h-[600px] rounded-3xl">
                <SwiperSlide  >
                    <div
                        className="relative flex  justify-center items-center h-full min-h-80 bg-center bg-cover "
                        style={{ backgroundImage: `url(${slider1})` }}
                    >
                        <div className="absolute  inset-0 bg-gradient-to-t from-black to-black opacity-30"></div>
                        <h1 className='md:text-7xl text-4xl z-10 font-semibold text-center text-[#ECF2EF]'>
                            <Typewriter
                                words={['Effortless Booking, Endless Adventures']}
                                loop={0 | false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={10}
                                delaySpeed={1000}
                            />
                        </h1></div></SwiperSlide>
                <SwiperSlide  >
                    <div
                        className="relative flex  justify-center items-center h-full min-h-80 bg-center bg-cover "
                        style={{ backgroundImage: `url(${slider2})` }}
                    >
                        <div className="absolute min-h-80 inset-0 bg-gradient-to-t from-black to-black opacity-30"></div>
                        <h1 className='md:text-7xl text-4xl z-10 font-semibold text-center text-[#ECF2EF]'>
                            <Typewriter
                                words={['Your Dream Vacation, One Click Away']}
                                loop={0 | false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={10}
                                delaySpeed={1000}
                            />
                        </h1></div></SwiperSlide>
                <SwiperSlide  >
                    <div
                        className="relative flex  justify-center items-center h-full min-h-80 bg-center bg-cover "
                        style={{ backgroundImage: `url(${slider3})` }}
                    >
                        <div className="absolute  inset-0 bg-gradient-to-t from-black to-black opacity-30"></div>
                        <h1 className='md:text-7xl text-4xl z-10 font-semibold text-center text-[#ECF2EF]'>
                            <Typewriter
                                words={['Your Global Gateway to Great Stays']}
                                loop={0 | false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={10}
                                delaySpeed={1000}
                            />
                        </h1></div></SwiperSlide>
                <SwiperSlide  >
                    <div
                        className="relative flex  justify-center items-center h-full min-h-80 bg-center bg-cover "
                        style={{ backgroundImage: `url(${slider4})` }}
                    >
                        <div className="absolute  inset-0 bg-gradient-to-t from-black to-black opacity-30"></div>
                        <h1 className='md:text-7xl text-4xl z-10 font-semibold text-center text-[#ECF2EF]'>
                            <Typewriter
                                words={['Explore the World, One Booking at a Time']}
                                loop={0 | false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={10}
                                delaySpeed={1000}
                            />
                        </h1></div></SwiperSlide>





            </Swiper>
        </>
    );
};

export default Header;
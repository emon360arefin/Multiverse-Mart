import lottieAni2 from '../../../../../public/t28DLBfUCa.json';
import lottieAni1 from '../../../../../public/qaueXSdUgC.json';
import lottieAni3 from '../../../../../public/sale.json';
import React, { useRef, useState, useEffect } from 'react';
import Lottie from "lottie-react";
// import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
import Aos from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HeroSection = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <div className='bg-gradient-to-r from-blue-50 to-white'  >

                <div className='w-[100%] mx-auto '>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='md:flex md:justify-between md:w-[90%] md:mx-auto' >
                                {/* for left side hero section */}
                                <div  className='md:items-center mt-10 ms-3 md:ms-10 w-[280px] md:w-auto' data-aos="fade-left" data-aos-duration="1000">
                                    <h2 className='font-bold md:text-5xl text-2xl py-5 bg-gradient-to-r from-cyan-400 to-blue-700 text-transparent bg-clip-text'>
                                        Your Gateway <br /> <span className='ms-10'>to</span><br />
                                        <Typewriter
                                            words={['Endless Possibilities']}
                                            loop={15}
                                            delaySpeed={3000}
                                            typeSpeed={50}
                                            cursor
                                            cursorStyle='.'
                                        ></Typewriter>
                                    </h2>
                                    <p className='text-sm'>Your journey begins here, dive into the <br /> multiverse of delights,  where every purchase is a leap into a <br /> new adventure, prepare to shop beyond the limits of reality!</p>
                                    <button className='bg-white text-blue-600 font-bold p-3 mt-14 text-2xl shadow-lg rounded-md md:ms-16 hover:bg-blue-200 px-6'>Buy Now</button>
                                </div>

                                {/* right side hero section */}

                                <div  className='md:items-center md:px-20 bg-white md:flex hidden' data-aos="fade-up-left" data-aos-duration="1000"  >
                                    <div className=' '  >

                                        <Lottie animationData={lottieAni1} className='md:h-[500px] md:w-[550px] w-[200px] ' />

                                    </div>
                                  
                                </div>


                            </div>
                        </SwiperSlide>
                      
                        <SwiperSlide>
                            <div className='md:flex md:justify-between md:w-[90%] md:mx-auto' >
                                {/* for left side hero section */}
                                <div id='div-one' className='md:items-center mt-10 ms-3 md:ms-10 w-[280px] md:w-auto' data-aos="fade-left" data-aos-duration="1000">
                                    <h2 className='font-bold md:text-5xl text-2xl py-5 bg-gradient-to-r from-cyan-400 to-blue-700 text-transparent bg-clip-text'>
                                    Shop, Save, Smile <br /> <span className='ms-20'>to</span><br />
                                        <Typewriter
                                            words={['Online Bliss']}
                                            loop={15}
                                            delaySpeed={3000}
                                            typeSpeed={50}
                                            cursor
                                            cursorStyle='.'
                                        ></Typewriter>
                                    </h2>
                                    <p className='text-sm'>Your journey begins here, dive into the <br /> multiverse of delights,  where every purchase is a leap into a <br /> new adventure, prepare to shop beyond the limits of reality!</p>
                                    <button className='bg-white text-blue-600 font-bold p-3 mt-14 text-2xl shadow-lg rounded-md md:ms-16 hover:bg-blue-200 px-6'>Buy Now</button>
                                </div>

                                {/* right side hero section */}

                                <div  className='md:items-center md:px-20 bg-white md:flex hidden' data-aos="fade-up-left" data-aos-duration="1000"  >
                                    <div className=' '  >

                                        <Lottie animationData={lottieAni3} className='md:h-[500px] md:w-[500px] w-[250px] mx-auto  ' />

                                    </div>
                                  
                                </div>


                            </div>
                        </SwiperSlide>
                      
                        <SwiperSlide>
                            <div className='md:flex md:justify-between md:w-[90%] md:mx-auto' >
                                {/* for left side hero section */}
                                <div id='div-one' className='md:items-center mt-10 ms-3  md:ms-10' data-aos="fade-left" data-aos-duration="1000">
                                    <h2 className='font-bold md:text-5xl text-2xl py-5 bg-gradient-to-r from-cyan-400 to-blue-700 text-transparent bg-clip-text'>
                                    Shop Securely <br /> <span className='ms-10'>in</span><br />
                                        <Typewriter
                                            words={['Your Trusted Online Retailer']}
                                            loop={15}
                                            delaySpeed={3000}
                                            typeSpeed={50}
                                            cursor
                                            cursorStyle='.'
                                        ></Typewriter>
                                    </h2>
                                    <p className='text-sm'>Your journey begins here, dive into the <br /> multiverse of delights,  where every purchase is a leap into a <br /> new adventure, prepare to shop beyond the limits of reality!</p>
                                    <button className='bg-white text-blue-600 font-bold p-3 mt-14 text-2xl shadow-lg rounded-md md:ms-16 hover:bg-blue-200 px-6'>Buy Now</button>
                                </div>

                                {/* right side hero section */}

                                <div  className='md:items-center md:px-20 bg-white md:flex hidden' data-aos="fade-up-left" data-aos-duration="1000"  >
                                    <div className=' '  >

                                        <Lottie animationData={lottieAni2} className='h-[500px] md:w-[500px] w-[250px] ' />

                                    </div>
                                  
                                </div>


                            </div>
                        </SwiperSlide>
                      

                    </Swiper>

                </div>


            </div>


        </>
    );
};

export default HeroSection;
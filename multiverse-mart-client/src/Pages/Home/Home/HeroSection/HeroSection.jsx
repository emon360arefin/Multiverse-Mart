import lottieAni2 from '../../../../../public/t28DLBfUCa.json';
import Lottie from "lottie-react";
import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import Aos from 'aos';
const HeroSection = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <div className='bg-gradient-to-r from-blue-50 to-white md:relative'  >
                <div className='w-[95%] mx-auto '>

                    <div className='md:flex md:justify-between' >
                        {/* for left side hero section */}
                        <div id='div-one' className='md:items-center mt-10  w-[280px] md:w-auto' data-aos="fade-left" data-aos-duration="1000">
                            <h2 className='font-bold text-5xl py-5 bg-gradient-to-r from-cyan-400 to-blue-700 text-transparent bg-clip-text'>
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
                            <button className='bg-white text-blue-600 font-bold p-3 my-8 text-2xl shadow-lg rounded-md md:ms-16 hover:bg-blue-200 px-6'>Buy Now</button>
                        </div>

                        {/* right side hero section */}
                   
                        <div id='wavy' className='items-center px-20 bg-white flex' data-aos="fade-up-left" data-aos-duration="1000"  >
                           <div className='md:absolute end-10 bottom-28 -translate-x-6 -translate-y-6'  >
                         
                           <Lottie animationData={lottieAni2} className='h-[400px] md:w-[400px] w-[250px] mx-auto pb-20 -top-16 -translate-x-6' />

                           </div>
                           <div className='md:absolute md:end-0 md:translate-x-52 md:-translate-y-10  md:-right-10'>
                            <h2 className='text-4xl text-blue-400'>Shopping Now</h2>
                           </div>
                        </div>
                      
                         
                    </div>
                </div>

               
            </div>


        </>
    );
};

export default HeroSection;
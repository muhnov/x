import React from 'react';
import {FaLocationPin} from 'react-icons/fa6'
import { Spotlight } from './ui/Spotlight';
import { SparklesPreview } from './SparklesPreview';
import MagicButton from './MagicButton';
import { AnimatedTestimonialsDemo } from './Animated';
import Footer from './Footer';




const Hero = () => {
    return (
        <section id='home' className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
                    fill='pink'
                />
                <Spotlight className='h-[80vh] w-[50vw] top-10 left-full'
                    fill='purple'
                />
                <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]'
                    fill='blue'
                />
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    {/* Spark Preview */}
                    <SparklesPreview />

                    {/* Magic Button */}
                    <div>
                        <a href="#garapan">
                            <MagicButton
                            icon={<FaLocationPin/>}
                                title='Airdrop Crypto'
                                position='right'
                            />
                        </a>
                    </div>
                    {/* content */}
                    <div id='garapan' className='pt-36 text-white items-center justify-center'>
                        <h1 className='text-4xl text-center'>App Telegram</h1>
                        <AnimatedTestimonialsDemo/>
                    </div>
                    {/* footer */}
                    <Footer/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
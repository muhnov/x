import React from 'react';
import { socialIcons } from './data';

const Footer = () => {
    return (
        <footer className='w-full  pt-48 pb-10' id='contact'>
            <div className='flex flex-col items-center ' >
                {/* <h1 className='heading text-4xl text-white lg:max-w[45vw]'>Social Media</h1> */}
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-white text-sm md:font-normal font-light'>Copyright &copy; 2024 Airdrop Website</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {
                        socialIcons.map((icon) => (
                            <a key={icon.id} href={icon.link} target="_blank" rel="noopener noreferrer">
                                <img src={icon.img} alt={`Social Icon ${icon.id}`} style={{ width: "20px", height: "20px" }} />
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
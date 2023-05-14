import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import './Banner.css'
import { HiArrowSmRight,HiArrowSmLeft } from 'react-icons/hi';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-lg mt-4">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text white space-y-5 pl-6  '>
                        <h2 className='banner-title'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='banner-des'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn btn-secondary capitalize">Discover More</button>
                            <button className="btn btn-outline btn-secondary capitalize">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* banner arrow icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-6 bottom-0">
                    <a href="#slide4" className="btn btn-circle"><HiArrowSmLeft></HiArrowSmLeft></a>
                    <a href="#slide2" className="btn btn-circle btn-secondary"><HiArrowSmRight></HiArrowSmRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text white space-y-5 pl-6  '>
                        <h2 className='banner-title'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='banner-des'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn btn-secondary capitalize">Discover More</button>
                            <button className="btn btn-outline btn-secondary capitalize">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* banner arrow icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-6 bottom-0">
                    <a href="#slide1" className="btn btn-circle"><HiArrowSmLeft></HiArrowSmLeft></a>
                    <a href="#slide3" className="btn btn-circle btn-secondary"><HiArrowSmRight></HiArrowSmRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text white space-y-5 pl-6  '>
                        <h2 className='banner-title'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='banner-des'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn btn-secondary capitalize">Discover More</button>
                            <button className="btn btn-outline btn-secondary capitalize">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* banner arrow icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-6 bottom-0">
                    <a href="#slide2" className="btn btn-circle"><HiArrowSmLeft></HiArrowSmLeft></a>
                    <a href="#slide4" className="btn btn-circle btn-secondary"><HiArrowSmRight></HiArrowSmRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text white space-y-5 pl-6  '>
                        <h2 className='banner-title'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='banner-des'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn btn-secondary capitalize">Discover More</button>
                            <button className="btn btn-outline btn-secondary capitalize">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* banner arrow icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-6 bottom-0">
                    <a href="#slide3" className="btn btn-circle"><HiArrowSmLeft></HiArrowSmLeft></a>
                    <a href="#slide1" className="btn btn-circle btn-secondary"><HiArrowSmRight></HiArrowSmRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
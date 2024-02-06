"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Img } from "@/utils/Img";
import SliderComp from "@/component/SliderNew";

const Slider = () => {
    const cardData = [
        {
            id: 1,
            name: "Nora Davis",
            role: "Manager",
            comment: "This platform is amazing!",
            reaction:
                "Reaction is ad Reaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is ad",
            imageSrc: "/images/review.png",
        },

        {
            id: 2,
            name: "Naira Davis",
            role: "Manager",
            comment: "This platform is amazing!",
            reaction:
                "Reaction is ad Reaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is ad",
            imageSrc: "/images/review.png",
        },
        {
            id: 3,
            name: "Sania Davis",
            role: "Manager",
            comment: "This platform is amazing!",
            reaction:
                "Reaction is ad Reaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is ad",
            imageSrc: "/images/review.png",
        },
    ];

    return (
        <div className="px-[20px]">
            <div className="mt-[40px]">
                <SliderComp/>
            </div>
            <div className=" flex justify-center items-center">
                <div className="text-[20px] md:text-[28px] mt-[40px] max-w-[270px]    text-center  font-semibold">
                    100% Money Back Guarantee
                </div>

            </div>
            <div className=" flex justify-center items-center">
                <div className=" text-[12px] md:text-[15px] w-[260px] md:w-[340px]  text-[#535353]  mt-[20px] pb-[25px]  text-center  font-normal">
                    Although we don’t think you’ll ever want one, we’ll gladly provide a refund if you request it within 7 days of your purchase
                </div>
            </div>
        </div>
    );
};

export default Slider;

"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Img } from "@/utils/Img";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    const cardData:any[] = [
        {
            id: 1,
            name: "Olivia Davis",
            role: "HR manager",
            comment: "Amazing fit!",
            reaction:
                "It’s the first time we have a program that fits our organisation perfectly. Our employees and managers love it!",
            imageSrc: "/review1.png",
        },
        {
            id: 2,
            name: "Jason Nguyen",
            role: "CFO",
            comment: "The best investment we made",
            reaction:
                "The program made a significant improvement in our employees' energy and performance, and generally, it’s fun being in the company!",
            imageSrc: "/review2.png",
        },

        {
            id: 3,
            name: "Ethan Williams",
            role: "Team leader",
            comment: "I love Reaction!",
            reaction:
                "It has brought our team closer together, and we now collaborate better",
            imageSrc: "/review3.png",
        },
    ];

    return (
        <div className="px-[20px]">
            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1600,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"

                >
                    {cardData.map((card,index) => (
                        <SwiperSlide  style={{border:'1px solid #dadada',borderRadius:14,height:185}} key={index}>
                            <div  className="w-full p-[15px]  h-[200px]">
                                <div className="flex flex-row gap-[15px] justify-start items-center">
                                    <div>
                                        <Img src={card.imageSrc} alt="logo" className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] " />
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="text-[10px] md:text-[12px] text-[#5B5959]  font-semibold">{card.name}</div>
                                        <div className="text-[10px] text-[#5B5959]  font-semibold">{card.role}</div>
                                    </div>
                                </div>
                                <div className="text-[12px] md:text-[16px] mt-[10px] mb-[4px] text-[#000000]  font-semibold">{card.comment}</div>
                                <div className="text-[11px] md:text-[11px]  text-[#000000]  font-normal">{card.reaction}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;

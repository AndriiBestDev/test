"use client"

import React, { useState } from "react";
import { Img } from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
    setData:any;
}

const list = [
    {
        images:'/images/thumb-down.png',
        name:'Disagree'
    },
    {
        images:'/images/thumb-up.png',
        name:'Agree'
    }
]

const Question13:React.FC<QuestionProps> = ({handleNextStep,setData}) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index:number) => {
        // @ts-ignore
        setSelectedCard(index);
        setData(list[index].name);
        handleNextStep();
    };

    return (
        <div>
            <div className="textDiv mt-[30px]">
                <h1 className="text-[#000] mb-[40px] text-[22px] md:text-[26px] font-semibold text-center">
                    “Team members feel comfortable expressing their thoughts and ideas openly”
                </h1>
            </div>
            <div className="yesCardDiv">
                {list.map((item,index) => (
                <div
                    key={index}
                    className={`YesCard cursor-pointer ${selectedCard === index ? "selected" : ""}`}
                    onClick={() => handleCardClick(index)}
                >
                    <div>
                        <Img src={item.images} alt="none" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                    </div>
                    <div className="text-[#343434] font-semibold text-[16px] md:text-[20px] mt-[5px]">{item.name}</div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Question13;

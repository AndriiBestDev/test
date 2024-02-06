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
        name:'No'
    },
    {
        images:'/images/thumb-up.png',
        name:'Yes'
    }
]
const Question9:React.FC<QuestionProps> = ({handleNextStep,setData}) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelectedCard(index);
        setData(list[index].name);
        handleNextStep();
    };

    return (
        <div>
            <div className="textDiv mt-[30px]">
                <h1 className="text-[#000] mb-[40px] text-[22px] md:text-[26px] font-semibold text-center">
                    Do team members actively participate and contribute?
                </h1>
            </div>
            <div className="yesCardDiv">
                {list.map((item,index) => (
                <button
                    key={index}
                    className={`YesCard cursor-pointer `}
                    onClick={() => handleCardClick(index)}
                >
                    <div>
                        <Img src={item.images} alt="none" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                    </div>
                    <div className="text-[#343434] font-semibold text-[16px] md:text-[20px] mt-[5px]">{item.name}</div>
                </button>
                ))}
            </div>
        </div>
    );
};

export default Question9;

"use client"

import React, {useState} from "react";
import {Img} from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
    setData:any;
}

const list = [
    {
        image:'/images/thumb-down.png',
        name:'No'
    },
    {
        image:'/images/thumb-up.png',
        name:'Yes'
    }
]
const Question19:React.FC<QuestionProps> = ({handleNextStep,setData}) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelectedCard(index);
        setData(list[index].name);
        handleNextStep();
    };

    return (
        <div>
            <div className="flex flex-col justify-center w-[100%] items-center  mt-[30px]">
                <h1 className="text-[22px] md:text-[26px] text-[#000] text-center font-semibold">
                    Would you like to motivate participation with rewards?
                </h1>
                <div>
                    <h1 className="text-center w-[290px] md:w-[350px] text-[14px] md:text-[18px] font-normal text-[#979797] mt-[8px] md:mt-[15px] pb-[15px] md:pb-[30px]">
                        Rewards are gift card that can be earned by employees for their achievements and are given at no
                        additional cost </h1>
                </div>
            </div>


            <div className="yesCardDiv mt-[15px] md:mt-[0px]">
                {list.map((item,index) => (
                <div
                    key={index}
                    className={`YesCard cursor-pointer ${selectedCard === index ? "selected" : ""}`}
                    onClick={() => handleCardClick(index)}
                >
                    <div>
                        <Img src={item.image} alt="none" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                    </div>
                    <div className="text-[#343434] font-semibold text-[16px] md:text-[20px] mt-[5px]">{item.name}</div>
                </div>
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <h1 className="text-center w-[220px] md:w-[240px] text-[16px] md:text-[18px] font-medium text-[#343434] mt-[70px]">
                    Rewards increase engagement by average X4
                     </h1>
            </div>

        </div>
    );
};

export default Question19;

"use client"
import React, {useState} from "react";
import {Img} from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
    setData:any;
}
const Question8:React.FC<QuestionProps> = ({handleNextStep,setData}) => {
    const images = [
        {
            image:'/images/sad.png',
            name:'1 Star'
        },
        {
            image:'/images/sad (1).png',
            name:'2 Star'
        },
        {
            image:'/images/confused.png',
            name:'3 Star'
        },
        {
            image:'/images/smile.png',
            name:'4 Star'
        },
        {
            image:'/images/happy.png',
            name:'5 Star'
        }
    ];

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelectedCard(index);
        setData(images[index].name)
        handleNextStep();
    };

    return (
        <div>
            <div className="mt-[30px] flex justify-center  items-center">
                <h1 className="text-[#000] mb-[40px] text-[22px] md:text-[26px] font-semibold text-center">
                    How do you perceive the <br/> overall morale of your team?
                </h1>
            </div>
            <div className="grid  px-[20px] grid-cols-5 gap-x-[8px] md:gap-x-[15px] w-[100%]">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={` emoji rounded-[10px] py-[12px] relative ${selectedCard === index ? 'bg-opacity-30' : ''} ${selectedCard === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selectedCard === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-row w-[100%] justify-center items-center`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div>
                            <Img src={image.image} alt={`Image ${index + 1}`} className="w-[30px] h-[30px]"/>
                        </div>
                    </button>
                ))}
            </div>
            <div className="w-[100%] px-[20px] flex flex-row justify-between mt-[5px]">
                <div className="text-[#343434] font-semibold text-[12px] md:text-[14px]">
                    Very low
                </div>
                <div className="text-[#343434] font-semibold text-[12px] md:text-[14px]">
                    Very High
                </div>
            </div>
        </div>
    );
};

export default Question8;

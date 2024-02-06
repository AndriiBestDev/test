"use client"

import React, {useState} from "react";
import Image from "next/image";
import Logo from "../../../images/logo.svg";
import Pic1 from "../../../images/partners.png";
import Pic2 from "../../../images/lotus.png";
import Pic3 from "../../../images/running.png";
import Pic4 from "../../../images/confusion.png";
import Ok from "../../../images/Ok.svg"

const data = [
    {
        Image: Pic1,
        name: "Bond my team"
    },
    {
        Image: Pic2,
        name: "Promote WellBeing"
    },
    {
        Image: Pic3,
        name: "improve Fitness"
    },
    {
        Image: Pic4,
        name: "Not Sure"
    }
]

interface QuestionProps {
    handleClick: () => void;
    setData: any;
}

const Question1: React.FC<QuestionProps> = ({handleClick, setData}) => {
    const [selected, setSelected] = useState<number | null>(null);
    const handleCardClick = (index: number) => {
        setSelected(index);
        setData(data[index].name);
        handleClick();
    };

    return (
        <div className="relative">
            <div className="flex mt-[40px] md:mt-[10px] justify-center">
                <Image src={Logo} alt={'logo'} className="w-[120px] h-[55px]"/>
            </div>
            <div className="mt-[22px] md:mt-[20px] flex flex-col text-center">
                <h1 className="font-poppins font-bold text-4xl leading-tight">
                    Step Challenge
                </h1>
                <h3 className="font-medium text-xl leading-72">Customized to your team</h3>
            </div>
            <div className="text-[#979797] text-[12px] font-medium text-center mt-[10px] md:mt-[2px]">
                1-MINUTE
            </div>
            <div className="mt-[25px] px-[20px] md:mt-[12px]">
                <div className="grid grid-cols-2 gap-x-[15px] gap-y-[12px] mt-[15px] md:mt-[8px]">
                    {data.map((item, index) => (
                        <button
                            key={index}
                            className={`rounded-[12px] ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'}  ${selected === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-col  gap-[3px] md:gap-[5px] py-[25px] justify-center relative items-center transition duration-300 ease-in-out hover:bg-opacity-30 hover:bg-yellow-400 hover:border-[#F9B22D]`}
                            onClick={() => handleCardClick(index)}
                        >
                            <Image src={item.Image} alt={"image"} className="w-[35px] h-[35px]"/>
                            <h1 className="text-[#343434] text-[14px] font-semibold">{item.name}</h1>
                            {selected === index && (
                                <div className="TickImage">
                                    <Image src={Ok} alt={'Tick'} width={20} height={20}/>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:px-[20px] md:mt-[40px] mt-[15px]">
                <div className="text-center text-[#606060] text-[12px] mt-[17px]">
                    By selecting one of the options above, you agree with
                    <button className="underline">
                        <a href="https://www.reaction-club.com/termsofuse/" target="_blank" rel="noopener noreferrer">
                            Terms of Conditions,
                        </a>
                    </button>
                    <button className="underline">
                        <a href="https://www.reaction-club.com/privacypolicy/" target="_blank"
                           rel="noopener noreferrer">
                            Privacy Policy,
                        </a>
                    </button>
                    <button className="underline">
                        <a href="https://www.reaction-club.com/termsofuse/" target="_blank" rel="noopener noreferrer">
                            Subscription Terms
                        </a>
                    </button>
                </div>


            </div>
        </div>
    )
}
export default Question1;

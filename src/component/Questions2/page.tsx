"use client"
import React, {useState} from "react";
import Image from "next/image"
import BriefCase from "../../../images/breifcase.png";
import Factory from "../../../images/enterprise.png";
import Heart from "../../../images/donation.png";
import Ok from "../../../images/Ok.svg";

const list = [
    {
        image: Factory,
        name : "Company",
    },
    {
        image: Heart,
        name : "Non-Profit",
    },
    {
        image: BriefCase,
        name: "Other",
    }
]

interface QuestionProps {
    handleNextStep: () => void;
    setData:any;
}

const Question2:React.FC<QuestionProps> = ({ handleNextStep,setData }) => {

    const [selected, setSelected] = useState(null);

    const handleCardClick = (index: number) =>  {
        // @ts-ignore
        setSelected(index);
        setData(list[index].name);
        handleNextStep();
    };

    return(
        <div>
            <h1 className="text-[22px] md:text-[26px] hy text-[#000] text-center font-semibold mt-[30px]">What type of organization <br /> are you working in?</h1>
            <div className="flex px-[20px] flex-col gap-[10px] mt-[30px]">
                {list.map((item,index) => (
                    <button
                        onClick={() => handleCardClick(index)}
                        key={index} className={` emoji rounded-[10px] px-[15px] py-[22px] ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-row w-[100%] justify-between items-center`}
                    >
                        <div className="flex flex-row gap-[20px] items-center">
                            <Image src={item.image} alt={'Logo'} className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                            <h1 className="text-[#343434] text-[18px] md:text-[20px] font-semibold">{item.name}</h1>
                        </div>
                        {selected === index && (
                            <Image src={Ok} alt={'Tick'} width={20} height={20} />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question2;

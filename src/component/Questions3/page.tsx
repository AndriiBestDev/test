"use client"
import React, {useState} from "react";
import Image from "next/image"
import Technologist from "../../../images/work-from-home.png";
import House from "../../../images/house.png";
import OfficeBuilding from "../../../images/flat.png";
import Bus from "../../../images/bus.png";
import Ok from "../../../images/Ok.svg";

const list = [
    {
        image: Technologist,
        name : "Remote",
    },
    {
        image: OfficeBuilding,
        name : "On-Site",
    },
    {
        image: House,
        name: "Hybrid",
    },
    {
        image: Bus,
        name: "Other",
    }
]

interface QuestionProps {
    handleNextStep: () => void;
    setData:any;
}
const Question3:React.FC<QuestionProps> = ({ handleNextStep,setData }) => {

    const [selected, setSelected] = useState(null);

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelected(index);
        setData(list[index].name)
        handleNextStep();
    };

    return(
        <div>
            <h1 className="text-[22px] md:text-[26px] text-[#000] text-center font-semibold mt-[30px] px-[20px]">What is your teams <br/> work style?</h1>
            <div className="grid px-[20px] grid-cols-2 gap-x-[16px] gap-y-[12px] md:gap-x-[22px] md:gap-y-[19px] mt-[30px]">
                {list.map((item,index) => (
                    <button
                        key={index}
                        className={` emoji rounded-[15px] ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-col  gap-[5px] py-[24px] md:py-[22px] justify-center relative items-center`}
                        onClick={() => handleCardClick(index)}
                    >
                        <Image src={item.image} alt={"image"} className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]" />
                        <h1 className="text-[#343434] text-[14px] mt-[4px] md:text-[14px] font-semibold">{item.name}</h1>
                        {selected === index && (
                            <div className="TickImage">
                                <Image src={Ok} alt={'Tick'} width={20} height={20} />
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question3;

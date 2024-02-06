import React from "react";
import {BarChart} from "@/component/chats";
import Image from "next/image";
import Fire from "../../../images/fire.svg";

const freq1 = {
    label: 'Before',
    data: ['73','70','20'],
    backgroundColor: '#555',
}

const freq2 = {
    label: 'After',
    data: ['141','141','100'],
    backgroundColor: '#5ADB00',
}


interface QuestionProps {
    handleClick: () => void;
    states:{
        improve_team:string[];
    };
}

const Questions16:React.FC<QuestionProps> = ({handleClick,states}) => {

    const months= states.improve_team;
    return(
        <div className="">
            <div className="mt-[30px]  flex flex-row justify-between">
                <p className="text-[#000] font-semibold text-[14px]">Plan success prediction</p>

                <span className="bg-[#5553FE] py-[1px] md:py-[3px] px-[6px] md:px-[8px] rounded-[6px] md:rounded-[8px] flex flex-row gap-[3px] md:gap-[5px] items-center">
                    <p className="text-[#fff] text-[12px] font-medium">Result: High</p>
                    <Image src={Fire} alt={'fire'}  className="w-[12px] h-[12px] md:w-[12px] md:h-[12px]" />
                </span>
            </div>
            <p className="text-[#979797] text-[12px] mt-[10px] font-normal mr-[60px]">There is a high chance your team will see positive impact on team dynamics and engagement</p>
            <div className="flex flex-row gap-[20px] mt-[10px] items-center">
                <div className="flex flex-row gap-[5px] md:gap-[8px] items-center">
                    <div className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-[3px] bg-[#555]" />
                    <p className="text-[#343434] text-[12px] md:text-[14px] font-normal">Before</p>
                </div>
                <div className="flex flex-row gap-[8px] items-center">
                    <div className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-[3px] bg-[#5ADB00]" />
                    <p className="text-[#343434] text-[12px] md:text-[14px] font-normal">After</p>
                </div>
            </div>
            <div className="mt-[10px]">
                <BarChart
                    params={{
                        labels: months,
                        datasets: [freq1,freq2],
                        chartType: 'bar',
                    }}
                />
            </div>
            <p className="text-[#979797] mt-[20px] text-[12px] font-normal text-center px-[15px]">*Based on data of companies using Reaction for 90 days, analysed by Reaction. The chart is a non-customized illustration and results may vary</p>

           <div className="px-[40px] mt-[70px]">
               <button onClick={handleClick} className="text-[#000] mt-[14px] md:mt-[20px] py-[8px] md:py-[14px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]">
                   Show me plan
               </button>
           </div>
        </div>
    )
}

export default Questions16;

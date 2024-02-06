"use client"
import React, {useState} from "react";
import {Img} from "@/utils/Img";
import SliderComp from "@/component/Slider";
import Timer from "@/component/Timer";
import Logo from "../../images/logo.svg";
import {BarChart} from "@/component/chats";
import Switch from "react-switch";

const months =  ['Week1', "Week2", "Week3", "Week4"];

const freq1 = {
    label: 'Week',
    data: ['10','80','60','120'],
    borderColor: '#343434',
    backgroundColor: '#dadada',
    fill: false,
}

const list = [
    {
        name:'Step challenge '
    },
    {
        name: 'AI engagement engine'

    },
    {
        name: 'Admin dashboard'

    },
    {
        name: 'Personal account manager to answer questions and support your program'

    },
    {
        name: 'Marketing materials '

    }
]

interface QuestionProps {
    handleClick: () => void;
    setData:any;
    states:any;
}
const PaymentForm:React.FC<QuestionProps> = ({setData,handleClick,states}) => {
    const [selectedOption, setSelectedOption] = useState("monthly");
    const [checked, setChecked] = useState(false);

    const handleChange = (checked: boolean) => {
        setChecked(checked);
        setData(checked);
    };
    const handleOptionSelect = (option: React.SetStateAction<string>) => {
        setSelectedOption(option);
    };

    const StartDate = states.create_step_challenge.selectedDate.startDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const timeDifferenceInDays = Math.floor((states.create_step_challenge.selectedDate.endDate - states.create_step_challenge.selectedDate.startDate) / (1000 * 60 * 60 * 24));



    const isMonthlySelected = selectedOption === "monthly";
    const isYearlySelected = selectedOption === "yearly";

    // @ts-ignore
    return (
        <div className="w-[100%]">
            <div className="fixed md:w-[400px] z-20 w-[425px]">
                <Timer/>
            </div>
            <div className="hy">
                <div className="flex flex-col justify-center  items-center">
                    <div>
                        <Img src={Logo} alt='logo' className='w-[100px] h-[70px] mt-[40px]'/>
                    </div>
                    <div className='md:text-[26px] font-semibold text-[22px] mt-[10px]'>
                        Your Challenge Is Ready!
                    </div>
                </div>
                <div className='flex flex-row px-[40px] my-[10px] md:px-[40px] justify-between items-center '>
                    <div className='flex-col flex items-start'>
                        <div className='flex justify-center items-center gap-[8px] flex-row'>
                            <div className='h-[34px] w-[34px] bg-[#DADADA] flex items-center justify-center rounded-full'>
                                <Img src='/images/clock.png' alt='logo' className='w-[18px] h-[18px]'/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[13px] font-normal text-[#979797]'>
                                    Start date
                                </div>
                                <div className='text-[12px] font-medium text-[#343434]'>
                                    {StartDate}
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-[15px] items-center gap-[8px] flex-row'>
                            <div className='h-[34px] w-[34px] bg-[#DADADA] flex items-center justify-center rounded-full'>
                                <Img src='/images/arrow.png' alt='logo' className='w-[18px] h-[18px]'/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[13px] font-normal text-[#979797]'>
                                    Duration
                                </div>
                                <div className='text-[12px] font-medium text-[#343434]'>
                                    {`${timeDifferenceInDays} days`}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Img src='/images/girl.png' alt='logo' className='w-[84px] h-[134px]'/>
                    </div>
                </div>
                <div className="bg-[#979797] h-[1px] mx-[40px] flex-1" />
                <div className='text-[12px] text-[#000] px-[40px] mt-[10px] font-semibold'>
                    Engagement prediction
                </div>
                <div className="my-[10px] mx-[30px]">
                    <Img src="/chart.png" alt="Engagement Prediction Chart" className="w-full"/>
                </div>
                <div className='md:text-[18px] text-[14px] px-[30px]  md:px-[20px] text-[#979797]  text-center mt-[15px] font-semibold'>
                    Subscription starts at <span className='text-black font-bold'>$4.99</span> per user per month.
                    Cancel
                    anytime
                </div>
                <div className="mx-[20px]">
                <div
                    className="w-full h-[45px] md:h-[50px]  px-[20px] flex  flex-row justify-between items-center mt-[25px] iosCard">
                    <div className=" text-[14px] md:text-[18px] font-normal text-[#343434]">
                        Unlock 7 days free trial
                    </div>
                    <div className="mt-[7px] relative z-10  ">
                        <label>
                            <Switch
                                onChange={handleChange}
                                checked={checked}
                                onColor="#F9B22D"
                                onHandleColor="#ffff"
                                handleDiameter={20}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={22}
                                width={38}
                                className="react-switch"
                            />
                        </label>
                    </div>
                </div>
                </div>
                <div className="w-full mt-[10px] px-[20px] ">
                    <button onClick={handleClick} className="uppercase flex items-center justify-center mt-[12px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[12px] md:text-[16px] font-semibold leading-10 tracking-tight text-[#000] py-[6px]">SUBSCRIBE NOW</button>
                </div>
                <div className='px-[20px] text-center text-[11px] mt-[20px] text-[#979797]'>
                    By clicking <span className='text-black font-bold'>SUBSCRIBE NOW, </span>I agree to pay $0.99 per
                    user per month and that if I do not cancel before
                    the end of the first month plan, it will convert to a monthly subscription plan and Reaction will
                    automatically charge my payment method the regular price of $5.99 per user every month thereafter
                    until
                    I cancel. I can cancel online by visiting the subscription page on Reaction’s website to avoid being
                    charged the next next billing cycle.
                </div>
                <div className='md:text-[26px]  text-center font-semibold text-[22px] mt-[15px] pb-[10px]'>
                    What you get
                </div>
                <div className='flex  flex-col  gap-[10px] px-[20px] justify-start items-start'>
                    {list.map((item,index) => (

                        <div
                            key={index}
                            className='flex flex-row justify-start items-center'>
                            <div>
                                <Img src='/images/Ok.png' alt='logo'
                                     className='w-[30px] h-[30px] '/>
                            </div>
                            <div className="md:text-[14px] w-[275px] md:w-[330px]  text-[12px]  ml-[15px] font-semibold">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
                <SliderComp/>
            </div>
        </div>
    );
};

export default PaymentForm;

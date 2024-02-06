"use client"
import React from "react";


const DownLoad_App: React.FC<any> = () => {
    return (
        <div className="w-[100%] h-[100%]">
            <div>
                <div className="flex flex-col justify-center  items-center mt-[5px]">
                    <div className='md:text-[26px] font-semibold text-[22px] mt-[30px]'>
                        You’re all set!
                    </div>
                    <div
                        className='text-center px-[20px] text-[#343434] font-normal text-[14px] md:text-[16px] my-[30px] md:my-[60px]'>
                        We are currently customizing the platform to align with your companys goals and needs. This
                        process may take a few hours, and once completed, we will send you an email with your dashboard
                        and the teams app.
                    </div>
                    <div className="w-full px-[25px]">
                        <a
                            href="https://www.reaction-club.com/"
                            className="uppercase flex items-center justify-center mt-[12px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[12px] md:text-[16px] font-semibold leading-10 tracking-tight text-[#000] py-[6px]"
                        >
                            Close
                        </a>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default DownLoad_App;

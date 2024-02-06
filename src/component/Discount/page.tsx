import React, { Dispatch, SetStateAction, useState } from 'react';
import cn from "clsx"
import {produce} from "immer"

interface QuestionProps {
    handleClick: () => void;
    setData:any;
    states: any;
}

const Discount: React.FC<QuestionProps> = ({ handleClick, setData, states }) => {


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">Test before you launch!</h1>
                <p className="text-sm mb-4">Test the challenge with 5 users colleagues before making a decision</p>
                <div className="toggle-switch active mb-6"></div>
                <div className="text-white bg-[#EFF1F4] flex font-medium py-4 px-8 rounded-md mb-4">
                    <div className="flex items-center justify-between w-full">
                        <div className="mr-4 text-black">Unlock trial discount</div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input defaultChecked={states.trialDiscount} onChange={(e) => setData(produce((draft: any) => {
                                draft.trialDiscount = e.target.checked
                            }))} type="checkbox" value="" className="sr-only peer outline-none bg-green-400" />
                            <div className={cn("w-11 h-6 bg-gray-400 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600", { "bg-green-500": states.trialDiscount })}></div>
                        </label>
                    </div>
                </div>
                <ul className="text-left mb-6">
                    <li className="flex items-center mb-2">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i> Unlock all challenge features
                    </li>
                    <li className="flex items-center mb-2">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i> Start with your personal card, then easily switch to company billing in the admin dashboard
                    </li>
                    <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i> We`ll send you an invoice for seamless expense reporting
                    </li>
                </ul>
                <button  onClick={handleClick} className="text-white bg-yellow-500 hover:bg-yellow-600 font-bold py-2 px-8 rounded-md">Confirm</button>
            </div>
        </div>
    );
}

export default Discount;

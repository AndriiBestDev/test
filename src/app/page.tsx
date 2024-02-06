"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../images/logo.png";
import Back from "../../images/back.svg";
import Question2 from "@/component/Questions2/page";
import Question3 from "@/component/Questions3/page";
import Question4 from "@/component/Questions4/page";
import Question5 from "@/component/Questions5/page";
import Question6 from "@/component/Questions6/page";
import Question7 from "@/component/Questions7/page";
import Question15 from "@/component/Questions15/page";
import Questions20 from "@/component/Questions20/page";
import Questions16 from "@/component/Questions16/page";
import Question8 from "@/component/Question8";
import Question9 from "@/component/Question9";
import Question10 from "@/component/Question10";
import Question11 from "@/component/Question11";
import Question13 from "@/component/Question13";
import Question14 from "@/component/Question14";
import Question18 from "@/component/Question18";
import Question19 from "@/component/Question19";
import Question12 from "@/component/Question12";
import Payment from "@/component/Payment";
import Question17 from "@/component/Question17";
import Create_user from "@/component/Create_user";
import Element1 from "../../images/element1.svg";
import Element2 from "../../images/element2.svg";
import DownLoad_App from "@/component/DownLoad_App";
import Question1 from "@/component/Questions01/page";
import Checkout from "@/component/Checkout";
import Discount from "@/component/Discount/page";

const Questionary = () => {
    const [currentStep, setCurrentStep] = useState<any>(1);

    const defaultStates = {
        goal: null,
        company: null,
        work_style: null,
        work_schedule: null,
        organization: null,
        team_size: null,
        moral: null,
        actively_participate: null,
        team_conflicts_experince: null,
        stress_at_work: null,
        team_members_know_each_other_on_persoal_level: null,
        team_members_comfort: null,
        improve_team: [],
        create_step_challenge: {},
        participation_reward: null,
        admin_detail: {},
        pricing: '',
        free_trial: false,
        price_id: '',
        client_secret: '',
        customer_id: '',
        trialDiscount: false
    };


    const [states, setStates] = useState<any>(defaultStates);
    

    const getProgressBarWidth = () => {
        return ((currentStep - 1) / 13) * 100;
    };

    const handleNextStep = () => {
        setTimeout(() => {
            setCurrentStep((prevStep: any) => prevStep + 1);
        }, 1000);
    };


    const shouldRenderComponent = currentStep !== 1 && currentStep !== 22;

    const ProgressComponent = currentStep !== 21 && currentStep !== 24 && currentStep !== 20 && currentStep !== 15 && currentStep !== 7 && currentStep !== 1 && currentStep !== 23 && currentStep !== 22 && currentStep !== 16 && currentStep !== 17 && currentStep !== 18 && currentStep !== 19;


    useEffect(() => {
        function sendHeightToParent () {
            // @ts-ignore
            const height = document.body.scrollHeight;
            // @ts-ignore
            window.parent.postMessage({
                'frameHeight': height
            }, '*'); // Replace '*' with your WordPress site's origin for added security
        }

        sendHeightToParent();
    }, [handleNextStep]);


    return (
        <main className="flex justify-center items-center">
            <div
                className={`md:w-[400px] w-[425px] h=[100vh] z-[20] relative bg-white  ${(currentStep === 22 || currentStep === 23) ? 'p-0' : 'p-[15px]'} overflow-hidden`}>
                {shouldRenderComponent && (
                    <div
                        className={`flex w-[100%] mt-[10px] z-20 relative flex-row ${(currentStep !== 15 && currentStep !== 7 && currentStep !== 21 && currentStep !== 20 && currentStep !== 19 && currentStep !== 18 && currentStep !== 17 && currentStep !== 16) ? 'justify-between' : 'justify-center'} items-end `}>
                        {
                            // @ts-ignore
                            ![7, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].includes(currentStep) ? (
                                <button onClick={() => setCurrentStep(currentStep - 1)}>
                                    <Image src={Back} alt={'backButton'} width={15} height={14}/>
                                </button>
                            ) : <div/>}
                        <Image src={Logo} alt={'logo'} width={93} height={40} autoFocus={true}/>
                        <div>
                            {
                                // @ts-ignore
                                ![7, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].includes(currentStep) ? (
                                    <div className="text-[#3C8AF0] text-[16px] font-medium">
                                        <span className="text-[#3C8AF0]">{currentStep}</span>/<span
                                        className="text-[#979797]">14</span>
                                    </div>
                                ) : <div/>}
                        </div>
                    </div>
                )}
                {ProgressComponent && (
                    <div className="mt-[13px] hy w-[100%] z-20 relative">
                        <div
                            className="w-[100%] bg-[#E1E1E1] h-[5px] rounded-md overflow-hidden"
                            style={{ borderRadius: '3px' }}
                        >
                            <div
                                className="bg-[#2C98F0] h-full transition-all"
                                style={{
                                    width: `${getProgressBarWidth()}%`,
                                    borderRadius: '3px',
                                }}
                            />
                        </div>
                    </div>
                )}
                <div className="w-[100%] z-20  relative">
                  {currentStep === 1 && (
                        <Question1 setData={(goal: string) => setStates({ ...states, goal })}
                                   handleClick={handleNextStep}/>
                    )}
                  {currentStep === 2 && (<Question2 setData={(company: string) => setStates({ ...states, company })}
                                                      handleNextStep={handleNextStep}/>)}
                    {currentStep === 3 && (
                        <Question3 setData={(work_style: string) => setStates({ ...states, work_style })}
                                   handleNextStep={handleNextStep}/>)} 
                    {currentStep === 4 && (
                        <Question4 setData={(work_schedule: string) => setStates({ ...states, work_schedule })}
                                   handleNextStep={handleNextStep}/>)} 
                   {currentStep === 5 && (
                        <Question5 setData={(organization: string) => setStates({ ...states, organization })}
                                   handleNextStep={handleNextStep}/>)}
                    {currentStep === 6 && (
                        <Question6 setData={(team_size: string) => setStates({ ...states, team_size })}
                                   handleNextStep={handleNextStep}/>)}
                    {currentStep === 7 && (<Question7 handleClick={() => setCurrentStep(8)}/>)}
                    {currentStep === 8 && (<Question8 setData={(moral: string) => setStates({ ...states, moral })}
                                                      handleNextStep={handleNextStep}/>)}
                    {currentStep === 9 && (<Question9
                        setData={(actively_participate: string) => setStates({ ...states, actively_participate })}
                        handleNextStep={handleNextStep}/>)} 
                  {currentStep === 10 && (<Question10
                        setData={(team_conflicts_experince: string) => setStates({
                            ...states,
                            team_conflicts_experince
                        })}
                        handleNextStep={handleNextStep}/>)}
                    {currentStep === 11 && (
                        <Question11 setData={(stress_at_work: string) => setStates({ ...states, stress_at_work })}
                                    handleNextStep={handleNextStep}/>)}
                    {currentStep === 12 && (<Question12
                        setData={(team_members_know_each_other_on_persoal_level: string) => setStates({
                            ...states,
                            team_members_know_each_other_on_persoal_level
                        })} handleNextStep={handleNextStep}/>)}
                    {currentStep === 13 && (<Question13
                        setData={(team_members_comfort: string) => setStates({ ...states, team_members_comfort })}
                        handleNextStep={handleNextStep}/>)}
                   {currentStep === 14 && (
                        <Question14 setData={(improve_team: any[]) => setStates({ ...states, improve_team })}
                                    handleClick={() => setCurrentStep(15)}/>)}
                    {currentStep === 15 && (<Question15 handleNextStep={() => setCurrentStep(16)}/>)}
                    {currentStep === 16 && (<Questions16 states={states} handleClick={() => setCurrentStep(17)}/>)}
                    {currentStep === 17 && (<Question17 handleClick={() => setCurrentStep(18)}/>)}
                    {currentStep === 18 && (<Question18
                        setData={(create_step_challenge: string) => setStates({ ...states, create_step_challenge })}
                        handleClick={() => setCurrentStep(19)}/>)}
                    {currentStep === 19 && (<Question19
                        setData={(participation_reward: string) => setStates({ ...states, participation_reward })}
                        handleNextStep={handleNextStep}/>)}
                    {currentStep === 20 && (<Questions20 handleClick={() => setCurrentStep(21)}/>)}
                    {currentStep === 21 && (
                        <Create_user setData={(admin_detail: string) => setStates({ ...states, admin_detail })}
                                     handleClick={() => setCurrentStep(22)} states={states}/>)}
                    {currentStep === 22 && (
                        <Discount setData={(admin_detail: string) => setStates({ ...states, admin_detail })}
                                     handleClick={() => setCurrentStep(23)} states={states}/>)}
                    {currentStep === 23 && (
                        <Payment
                            states={states}
                            handleClick={() => setCurrentStep(24)}
                            setStates={setStates}
                        />
                    )}
                    {
                        currentStep === 24 && (
                            <Checkout states={states} handleClick={() => setCurrentStep(25)}/>
                        )
                    }
                    {currentStep === 25 && (<DownLoad_App/>)}
                </div>
                {![1, 23].includes(currentStep) && (
                    <div className="z-1">
                        <Image src={Element1} alt={'element1'} className="absolute top-[-120px] left-[-100px]"/>
                    </div>
                )}
                {(currentStep !== 1 && currentStep !== 23 && currentStep !== 22) && (
                    <div className="z-1">
                        <Image src={Element2} alt={'element1'}
                               className="absolute bottom-[-100px] h-[400px] right-[-130px]"/>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Questionary;

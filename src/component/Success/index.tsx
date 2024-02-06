import React, { FC, useEffect, useState } from 'react';
import Image from "next/image";
import Logo from "../../../images/logo.png";
import DownLoad_App from "@/component/DownLoad_App";
import Element1 from "../../../images/element1.svg";
import Element2 from "../../../images/element2.svg";
import { useStripe } from "@stripe/react-stripe-js";
import { ClipLoader } from "react-spinners";

declare let fbq: Function;

interface SuccessPageInterface {
    setup_intent_client_secret: any;
    setup_intent: any,
    customerId: any;
}

export const SuccessPage: FC<SuccessPageInterface> = (
    {
        setup_intent_client_secret,
        setup_intent,
        customerId,
    }
) => {
    const stripe = useStripe();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const checkSetupIntentStatus = async () => {
            const hasVisited = localStorage.getItem('hasVisited');
            if (hasVisited || !stripe || !setup_intent_client_secret) return;

            // @ts-ignore
            const result: any = await stripe.retrieveSetupIntent(setup_intent_client_secret);
            if (result.setupIntent && result.setupIntent.status === 'succeeded') {
                const priceId = localStorage.getItem('price_id');
                const priceType = localStorage.getItem('type');
                if (typeof fbq === 'function') {
                    fbq('track', 'Purchase', { currency: "USD", value: priceType === 'monthly' ? 9.95 : 4.95 });
                }
                console.log(result.setupIntent.payment_method)
                await attachPaymentMethod(customerId, result.setupIntent.payment_method)
                await subscribe(priceId);
            } else {
                // Handle the error or failed setup intent
                console.log('SetupIntent has not succeeded:', result.error?.message || 'Setup failed');
            }
            localStorage.setItem('hasVisited', 'true');
        };

        checkSetupIntentStatus();
    }, [stripe, setup_intent_client_secret]);

    const attachPaymentMethod = async (customerId: any, paymentMethodId: any) => {
        setLoading(true); // Assuming you have a setLoading function to handle UI loading state

        try {
            const response = await fetch('/api/attachPaymentMethod', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ customerId, paymentMethodId }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to attach payment method');
            }

            console.log('Payment method attached and set as default successfully:', data);
            // You can perform additional actions here upon successful attachment
            // For example, navigating to a success page or updating the UI
        } catch (error) {
            console.error('Error in attaching payment method:', error);
            // Handle errors in UI, like showing an error message
        } finally {
            setLoading(false);
        }
    };

    const subscribe = async (priceId: any) => {
        setLoading(true);
        try {
            const response = await fetch('/api/createSubscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerId,
                    priceId
                }),
            });

            const data = await response.json();
            console.log('Subscription created:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        setLoading(false);
    }

    useEffect(() => {
        const handleBeforeUnload = (e: any) => {
            // Prevent page reload
            e.preventDefault();
            e.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return <main className="flex justify-center items-center font-primary">
        <div className="md:w-[400px] w-[425px] min-h-[100vh] z-[20] relative bg-white p-[15px] overflow-hidden">
            <div className="flex w-full justify-center mt-[10px]">
                <Image src={Logo} alt={'logo'} width={93} height={40} autoFocus={true}/>
            </div>
            <div className="mt-[40px] w-full relative z-20">
                <DownLoad_App/>
            </div>
            <div className="z-1">
                <Image src={Element1} alt={'element1'} className="absolute top-[-120px] left-[-100px]"/>
            </div>
            <div className="z-1">
                <Image src={Element2} alt={'element1'}
                       className="absolute bottom-[-100px] h-[400px] right-[-130px]"/>
            </div>
        </div>
        {
            loading && <div className="flex fixed left-0 top-0 bottom-0 right-0 items-center justify-center z-50"
                            style={{ background: 'rgba(0,0,0,0.25)' }}>
                <ClipLoader color={'#F9B400'} loading={loading} size={100}/>
            </div>
        }
    </main>
}

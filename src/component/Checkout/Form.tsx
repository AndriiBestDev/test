import React, { FC, useEffect, useState } from 'react';
import { PaymentElement, useElements, useStripe, CardElement, PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import { ClipLoader } from "react-spinners";
import Apple from '../../../images/apple.png';
import Image from 'next/image';
import { StripeExpressCheckoutElementConfirmEvent } from '@stripe/stripe-js';
const ELEMENT_STYLES = {
    base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        '::placeholder': {
            color: '#aab7c4',
        },
        padding: '20px 24px',
    },
    invalid: {
        color: '#9e2146',
    },
};

interface CheckoutFormInterface {
    states: any,
    clientSecret: any,
    click: any,
}

const CheckoutForm: FC<CheckoutFormInterface> = ({ states, clientSecret: secret, click: handleClick }) => {
    const { price_id: priceId, customer_id: customerId, client_secret: clientSecret, pricing: type } = states;
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState<boolean>(false);
    const [paymentRequest, setPaymentRequest] = useState<any>(null);
    

    console.log('states', states);
    

    const handleSubscribe = async () => {
        setLoading(true);
        if (!stripe || !elements) {
            console.log('Stripe.js has not loaded yet.');
            return;
        }

        // Confirm the card setup using the PaymentElement.
        const result = await stripe.confirmSetup({
            elements,
            confirmParams: {
                return_url: 'https://reaction-omega-ecru.vercel.app/success',
                // return_url: 'http://localhost:3000/success',
            },
        });

        if (result.error) {
            console.log(result.error.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (states) {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('customer_id', btoa(customerId));
                localStorage.setItem('price_id', priceId);
                localStorage.setItem('type', type);
            }
        }
    }, [states]);
   
    return <div className="flex flex-col font-primary min-h-[850px]">
           <div className="flex items-center mb-4 mt-4">
      <h2 className="text-xl font-bold flex-grow text-center">
        Select payment method
      </h2>
    </div>
   
        <div className="w-full pt-[25px]">
            {
                clientSecret ? (<>
                 <PaymentElement/>
               
                </>) : ''
            }
        </div>
        <div className="pt-[25px] pb-[20px] text-[14px] border-b border-b-[#979797] border-t border-t-[#979797]">
            <div className="flex items-center text-[#000]  font-semibold">
                <div className="flex-1 p-1">
                    Total
                </div>
                <div className="p-1">
                    {type === 'yearly' ? '$4.95' : '$9.95'}
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-1 text-[#979797] p-1">
                </div>
                <div className="p-1 text-[#C73D23] font-semibold">
                    You just saved {type === 'yearly' ? '$50' : '$20'} ({type === 'yearly' ? '90%' : '70%'} off)
                </div>
            </div>
        </div>
        {
            loading && <div className="flex fixed left-0 top-0 bottom-0 right-0 items-center justify-center z-50"
                            style={{ background: 'rgba(0,0,0,0.25)' }}>
                <ClipLoader color={'#F9B400'} loading={loading} size={100}/>
            </div>
        }
        <div className="w-full pt-[25px]">
            <button
                onClick={handleSubscribe}
                disabled={loading}
                className="uppercase  text-[#000] mb-2 py-[12px] md:py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
            >
                SUBSCRIBE
            </button>
            <button
                onClick={handleSubscribe}
                disabled={loading}
                className="mb-2  text-[#fff] py-[12px] md:py-[12px] flex items-center justify-center bg-[#000] rounded-[32px] w-[100%] mb-4 font-bold text-[14px]"
            >
                <Image src={Apple} alt='logo' height={30}/>
            </button>
        </div>
    </div>
};

export default CheckoutForm;


import React, { useEffect, useState } from 'react';
import '../app/globals.css'
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { stripe_public_key } from "@/utils/stripe";
import { SuccessPage } from "@/component/Success";

const Success = () => {
    const stripePromise = loadStripe(stripe_public_key);
    const router = useRouter();
    const { setup_intent, setup_intent_client_secret } = router.query;

    const [customerId, setCustomerId] = useState<any>('');

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const customer = localStorage.getItem('customer_id') || '';
            const decruptCustomer = atob(customer);
            if (customer) setCustomerId(decruptCustomer);
        }
    }, []);

    return (
        <Elements stripe={stripePromise}>
            <SuccessPage
                customerId={customerId}
                setup_intent={setup_intent}
                setup_intent_client_secret={setup_intent_client_secret}
            />
        </Elements>
    )
};

export default Success;

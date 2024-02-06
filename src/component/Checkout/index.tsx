import React, {FC, useEffect} from 'react';
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "@/component/Checkout/Form";
import {loadStripe} from "@stripe/stripe-js";
import {stripe_public_key} from "@/utils/stripe";

interface CheckoutInterface {
    states: any,
    handleClick: any
}

const Checkout: FC<CheckoutInterface> = ({states, handleClick}) => {
    const stripePromise = loadStripe(stripe_public_key);
    const clientSecret = states.client_secret;
    useEffect(() => {
        console.log(states)
    }, []);

    return <Elements stripe={stripePromise} options={{clientSecret}}>
        {
            clientSecret ?
                <CheckoutForm states={states} clientSecret={clientSecret} click={handleClick}/> : 'loading...'
        }
    </Elements>
};

export default Checkout;


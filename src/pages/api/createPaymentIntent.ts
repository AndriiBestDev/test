// pages/api/createSetupIntent.ts
import {NextApiRequest, NextApiResponse} from 'next';
import stripe from "@/utils/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {email, name} = req.body;

        try {
            // Create a new Stripe customer
            const customer = await stripe.customers.create({email, name});

            // Create a Setup Intent to save the payment method for future usage
            const setupIntent = await stripe.setupIntents.create({
                customer: customer.id,
            });

            res.status(200).json({clientSecret: setupIntent.client_secret, customerId: customer.id});
        } catch (error: any) {
            res.status(500).json({statusCode: 500, message: error.message});
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

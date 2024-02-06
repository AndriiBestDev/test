import { NextApiRequest, NextApiResponse } from 'next';
import stripe, {
    stripe_product_1_key,
    stripe_product_1_trail_key,
    stripe_product_2_key,
    stripe_product_2_trail_key
} from "@/utils/stripe";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { customerId, priceId } = req.body;

        let trail_key;

        if (priceId === stripe_product_1_key) {
            trail_key = stripe_product_1_trail_key
        } else if (priceId === stripe_product_2_key) {
            trail_key = stripe_product_2_trail_key
        }
        try {
            await stripe.invoiceItems.create({
                customer: customerId,
                price: trail_key, // This should be the price ID for $4.99
            });
            // Create a new subscription with a trial price and set it to upgrade after 7 days
            const subscription = await stripe.subscriptions.create({
                customer: customerId,
                items: [{ price: priceId }],
                trial_end: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60), // 7 days from now
                expand: ['latest_invoice.payment_intent'],
            });


            res.status(200).json({
                subscriptionId: subscription.id,
                customerId: customerId,
                message: 'Subscription Created Successfully'
            });
        } catch (error: any) {
            res.status(500).json({ statusCode: 500, message: error.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

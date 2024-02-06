import { NextApiRequest, NextApiResponse } from 'next';
import stripe from "@/utils/stripe";

const attachPaymentMethodHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { customerId, paymentMethodId } = req.body;

        try {
            // Attach the PaymentMethod to the customer
            await stripe.paymentMethods.attach(paymentMethodId, {
                customer: customerId,
            });

            // Set it as the default payment method
            await stripe.customers.update(customerId, {
                invoice_settings: {
                    default_payment_method: paymentMethodId,
                },
            });

            res.status(200).json({ message: 'Payment method attached successfully' });
        } catch (error: any) {
            res.status(500).json({ statusCode: 500, message: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default attachPaymentMethodHandler;

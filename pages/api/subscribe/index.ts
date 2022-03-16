import mailchimp from '@mailchimp/mailchimp_marketing';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
});

interface ResponseType {
    error: string;
}
export default async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    try {
        await mailchimp.lists.addListMember('486654', {
            email_address: email,
            status: 'subscribed'
        });

        return res.status(201).json({ error: '' });
    } catch (error) {
        return res.status(500).json({ error: "Fail to subscribe" });
    }
};

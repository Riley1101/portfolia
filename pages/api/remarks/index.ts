// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/libs/prisma'
import { Remark } from '@prisma/client'
// import prisma schema generated types

type Data = {
    data: Remark[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { method } = req;
    switch (method) {
        case "GET":
            try {
                const connections: Remark[] = await prisma.remark.findMany({
                    orderBy: [
                        {
                            createdAt: 'desc',
                        },
                    ],

                })
                res.status(200).json({
                    data: connections,
                });
            } catch (e) {
                console.error("Request error", e);
            }
            break;


        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}

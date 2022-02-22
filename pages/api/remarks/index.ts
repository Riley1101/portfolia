// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/libs/prisma'
import { Remark } from '@prisma/client'
import { getSession } from 'next-auth/react'
// import prisma schema generated types

type Data = {
    data: Remark[] | string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;
    const session = await getSession({ req })
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
        case "POST":
            try {
                const user = await prisma.remark.create({
                    data: {
                        name: req.body.name,
                        email: req.body.email,
                        text: req.body.text,
                    },
                })
                res.status(200).json({
                    data: "Successfully created",
                });
            } catch (e) {
                console.error("Request error", e);
            } finally {
                prisma.$disconnect()
                res.end()
            }
            break;

        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}

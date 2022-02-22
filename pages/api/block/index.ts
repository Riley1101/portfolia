// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/libs/prisma'
import { Remark, Blocks } from '@prisma/client'
import { getSession } from 'next-auth/react'
// import prisma schema generated types

type Data = {
    data: Blocks[]
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;
    switch (method) {
        case "GET":
            try {
                const blocks: Blocks[] | null = await prisma.blocks.findMany()
                res.status(200).json({
                    data: blocks,
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

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/libs/prisma'
import { Blocks } from '@prisma/client'
// import prisma schema generated types
type Data = {
    data: Blocks | string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, query } = req;
    let slug: string = query.slug as string
    switch (method) {
        case "GET":
            try {
                const block: Blocks | null = await prisma.blocks.findUnique({
                    where: {
                        slug: slug
                    },
                });
                if (block) {
                    res.status(200).json({
                        data: block,
                    });
                } else {
                    const created_block: Blocks | null = await prisma.blocks.create(
                        {
                            data: {
                                slug: slug as string,
                                blocks: 0
                            },
                        } as any
                    )
                    res.status(200).json({
                        data: created_block,
                    });
                }

            } catch (e) {
                console.error("Request error", e);
            }
            break;

        case "POST":
            try {
                let data = req.body.block as number
                const updatedBlock = await prisma.blocks.update(
                    {
                        where: {
                            slug: slug
                        },
                        data: {
                            blocks: data
                        },
                    } as any);
                res.status(200).json({
                    data: updatedBlock,
                });
            } catch (e) {

            } finally {
                prisma.$disconnect()
            }

    }
}

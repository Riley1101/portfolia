import React from 'react';
import Head from 'next/head';
import type { Blog } from '.contentlayer/types'

interface Props {
    post: Blog
}

let metaDetaults = {
    title: 'Inspiring Frontend Developer',
    summary: 'Personal blog by @arkarkaungmyat',
    slug: 'arkarkaungmyat.vercel.app/',
    image: 'https://firebasestorage.googleapis.com/v0/b/arianagrande-a231e.appspot.com/o/Inspiring%20FRontend%20Developer(1).png?alt=media&token=d50ab1d9-782d-4457-8e63-2f952832f431',
}

export default function Meta({ post = metaDetaults }: Props) {
    return <Head>
        <title>{post.title}</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.summary} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`arkarkaungmyat.vercel.app/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.image} />

        <meta property="twitter:type" content="website" />
        <meta property="twitter:url" content={`arkarkaungmyat.vercel.app/${post.slug}`} />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.summary} />
        <meta property="twitter:image" content={post.image} />
    </Head>;
}

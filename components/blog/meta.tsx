import React from 'react';
import Head from 'next/head';

let metaDetaults = {
    title: 'Arkar Kaung Myat',
    summary: 'Personal blog by Arkar Kaung Myat',
    slug: 'arkardev.space/',
    image: '/static/sharing.png',
    type: 'Blog',
    publishedAt: '2020-01-01T00:00:00.000Z',
    pinned: false,
    body: '',
    readingTime: {},
    wordCount: 0,
    _id: '',
    _row: 0,
}

export default function Meta({ post = metaDetaults }: any): JSX.Element {
    return <Head>
        <title>{post.title}</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.summary} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.image} />

        <meta property="twitter:type" content="website" />
        <meta property="twitter:url" content={`${post.slug}`} />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.summary} />
        <meta property="twitter:image" content={post.image} />
    </Head>;
}

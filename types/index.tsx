interface meta {
    title: string;
    description: string;
    image: string;
    date: Date;
    readTime: string;
}

interface BlogType {
    link: 'string',
    id: 'number',
    meta: meta
}

export type { BlogType, meta }
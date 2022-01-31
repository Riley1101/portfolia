import React from 'react';
import type { PropsWithChildren } from 'react';
import type { Blog } from '.contentlayer/types';

type Props = {
    post: Blog
};

export default function Blog({ children, post }: PropsWithChildren<Props>) {
    return <div>

    </div>;
}

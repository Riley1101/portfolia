import React from 'react';
import Image from 'next/image'
import type { Snippets } from '.contentlayer/types'
type Props = {
    snippet: Snippets
};
export default function Header({ snippet }: Props) {
    return <header className='flexi-w grid gap-4 lg:p-4'>
        <h1 className='text-white text-4xl font-bold leading-normal lg:text-5xl lg:leading-normal '>{snippet.title}</h1>
        <p className='text-pale-100'>{snippet.summary}</p>
    </header>;
}

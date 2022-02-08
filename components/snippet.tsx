import React from 'react'
import type { Snippets } from '.contentlayer/types';
import Link from 'next/link'

interface Props {
    snippet: Snippets,
}
const Snippet: React.FunctionComponent<Props> = ({ snippet }) => {
    return (<Link href={`/snippet/${snippet.slug}`} passHref>
        <div className='grid p-4 rounded-md cursor-pointer border-2 border-slate-800 item-center'>
            <h3 className='font-bold text-lg'>{snippet.title}</h3>
            <p className=' text-pale-100'>{snippet.summary}</p>
        </div>
    </Link>


    )
}

export default Snippet;
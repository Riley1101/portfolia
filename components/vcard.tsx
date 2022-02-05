import React from 'react'
interface Props {
    alt: boolean,
}
const VCard: React.FunctionComponent<Props> = ({ alt = true }) => {
    return (
        <article className={`group grid gap-1 text-white aspect-auto ${alt ? 'glass' : 'glass-alt'} p-4 rounded-md cursor-pointer lg:gap-2 hover:scale-[1.01]`}>
            <h2 className="text-lg relative lg:text-xl  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l to-pink-600 from-red-400" >Everything I learnt about Next from my three year experiences.</h2>
            <p className='text-pale-100 text-sm lg:text-md'>Here’s my over all bugs and stuffs on NextJS</p>
            <span className='mt-2'>Jun 5 , 2021</span>
        </article >

    )
}

export default VCard;
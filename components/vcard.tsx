import React from 'react'

const VCard: React.FunctionComponent = () => {
    return (
        <article className='grid gap-1 text-white aspect-auto border border-white p-4 rounded-md cursor-pointer lg:gap-2'>
            <h2 className="text-lg relative lg:text-xl" >Everything I learnt about Next from my three year experiences.</h2>
            <p className='text-pale-100 text-sm lg:text-md'>Here’s my over all bugs and stuffs on NextJS</p>
            <span className='mt-2'>Jun 5 , 2021</span>
        </article >

    )
}

export default VCard;
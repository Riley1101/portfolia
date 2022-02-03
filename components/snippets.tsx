import React from 'react'
import Image from 'next/image';
const Snippets: React.FunctionComponent = () => {
    return (
        <div className='grid p-4 rounded-md cursor-pointer border-2 border-slate-800 item-center'>
            <h3 className='font-bold text-xl'>React and Redux</h3>
            <p className=' text-pale-100'>How to do dispatch with React and Redux.</p>
        </div>

    )
}

export default Snippets;
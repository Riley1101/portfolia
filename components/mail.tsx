import React from 'react'
const Mail: React.FunctionComponent = () => {
    return (
        <div className='text-white bg-slate-900 rounded-md p-4 grid gap-2'>
            <h3 className='text-xl'>Here You can directly talk to me </h3>
            <p className='text-pale-100 text-sm'>You can directly DMs me right here if you want to talk
                about frontend, designs or stuffs.</p>
            <div className='w-full p-2 bg-primary-100 rounded-md flex justify-between mt-2'>
                <textarea placeholder='Your message' className='bg-transparent outline-none px-1 border-none' />
            </div>
            <button className={`p-1 text-md border  rounded-md px-4 mt-1 ml-auto`}>Send</button>

        </div>

    )
}

export default Mail;
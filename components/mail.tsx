import React from 'react'
import { useForm } from '@formspree/react';
const Mail: React.FunctionComponent = () => {
    const [state, handleSubmit] = useForm('xpzbpjpj');



    return (
        <form className='text-white bg-slate-900 rounded-md p-4 grid gap-2' onSubmit={handleSubmit}>
            <h3 className='text-xl'>Here You can directly talk to me </h3>
            <p className='text-pale-100 text-sm'>You can directly DMs me right here if you want to talk
                about frontend, designs or stuffs.</p>
            <div className='w-full p-2 bg-primary-100 rounded-md flex justify-between mt-2'>
                <input required placeholder='Your email' type='email' name='email' className='bg-transparent outline-none px-1 border-none w-full' />
            </div>
            <div className='w-full p-2 bg-primary-100 rounded-md flex justify-between mt-2'>
                <textarea required placeholder='Your message' name='message' className='bg-transparent outline-none px-1 border-none w-full' />
            </div>
            <button type='submit' className={`p-1 text-md border-2 border-slate-800 rounded-md px-4 mt-1 ml-auto ${state.submitting && 'pointer-events-none'}`}> {state.submitting ? 'Submitting' : 'Submit'}</button>

        </form>

    )
}

export default Mail;
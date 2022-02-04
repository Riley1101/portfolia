import React from 'react'
import styles from '@/styles/common/btn/index.module.css'
const Mail: React.FunctionComponent = () => {
    return (
        <div className='text-white bg-slate-900 rounded-md p-4 grid gap-2'>
            <h3 className='text-xl'>Here You can directly talk to me </h3>
            <p className='text-pale-100 text-sm'>You can directly DMs me right here if you want to talk
                about frontend, designs or stuffs.</p>
            <div className='w-full p-2 bg-primary-100 rounded-md flex justify-between mt-2'>
                <textarea placeholder='Your message' className='bg-transparent outline-none px-1 border-none w-full' />
            </div>
            <button className={`${styles.btn} text-right `}>Send</button>

        </div>

    )
}

export default Mail;
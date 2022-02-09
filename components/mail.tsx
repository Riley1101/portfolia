import React from 'react'
import { useForm } from '@formspree/react';
import styles from '@/styles/common/btn/index.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

const Mail: React.FunctionComponent = () => {
    const [state, handleSubmit] = useForm('xpzbpjpj');
    const { data: session } = useSession()
    console.log(session)
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
            {
                session ?
                    <>
                        <a className={`${styles.btn} text-right cursor-pointer`} onClick={() => signOut()}>Sign Out {`hello ${session.user?.name}`}</a>
                        <button className={`${styles.btn} text-right `}>Send</button>
                    </>
                    :
                    <>
                        <a className={`${styles.btn} text-right cursor-pointer`} onClick={() => signIn()}>Sign In With Github to Comment</a>
                    </>

            }

        </form>

    )
}

export default Mail;
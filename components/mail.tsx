import React from 'react'
import styles from '@/styles/common/btn/index.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { useForm, Resolver } from 'react-hook-form';
const Mail: React.FunctionComponent = () => {

    type FormValues = {
        message: string;
    };

    const resolver: Resolver<FormValues> = async (values) => {
        return {
            values: values.message ? values : {},
            errors: !values.message ? { message: { type: 'required', message: 'Please enter a message', }, } : {},
        };
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ resolver });
    const { data: session } = useSession();

    const onSubmit = handleSubmit(async (data) => {
        let message = {
            "text": data.message,
            "name": session?.user?.name,
            "email": session?.user?.email
        }
        let response = await fetch('/api/remarks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        if (response.status === 200) {
            reset()
        }
    });

    return (
        <form className='text-white bg-slate-900 rounded-md p-4 grid gap-2' onSubmit={onSubmit}>
            <p className='text-xl'>Here You can directly talk to me </p>
            <p className='text-pale-100 text-sm'>You can directly DMs me right here if you want to talk
                about frontend, designs or stuffs.</p>

            <div className='w-full p-2 bg-primary-100 rounded-md flex justify-between mt-2'>
                <textarea   {...register("message")} placeholder='Your message' name='message' className='bg-transparent outline-none px-1 border-none w-full' />
            </div>
            {errors?.message && <p>{errors.message.message}</p>}

            {
                session ?
                    <>
                        {/* <a className={`${styles.btn} text-right cursor-pointer`} onClick={() => signOut()}>Sign Out</a> */}
                        <button className={`${styles.btn} text-right `}>Send</button>
                    </>
                    :
                    <>
                        <a className={`${styles.btn} text-right cursor-pointer`} onClick={() => signIn()}>Sign In With Github to Comment</a>
                        <span className=' text-right cursor-pointer text-sm text-pale-100'> Only used to display your name</span>
                    </>
            }

        </form>

    )
}

export default Mail;
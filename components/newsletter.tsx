import React from 'react'
import styles from '@/styles/common/btn/index.module.css'

const NewsLetter: React.FunctionComponent = () => {
    const [email, setEmail] = React.useState<string | undefined>(undefined);

    const onSubmit = async () => {
        let response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": email })
        })
        if (response.status === 200) {
            setEmail(undefined);
        }
    };

    return (
        <form onSubmit={onSubmit} className='validate flexi-w text-white bg-slate-900 rounded-md p-4 grid gap-2 ' action="https://space.us14.list-manage.com/subscribe/post?u=4d331f03f3f90e73c22a5a459&amp;id=145b8d3360" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
            <p className='text-xl'>Subscribe to newsletter </p>
            <p className='text-pale-100 text-sm'>Get emails from me about frontend technologies, coding and tech and early access to articles and events</p>
            <div className='w-full p-2 bg-primary-100 rounded-md flex justify-between mt-2'>
                <input type="email" value={email} placeholder='Enter your email' name="EMAIL" className="required email bg-transparent outline-none px-1 border-none w-full" id="mce-EMAIL" />
            </div>
            <button type='submit' className={`${styles.btn} text-right `} value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
        </form>

    )
}

export default NewsLetter;

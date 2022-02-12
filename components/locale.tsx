import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
const LocaleToggle: React.FunctionComponent = () => {
    const router = useRouter();
    return (<Link href={router.asPath} locale={router.locale === 'en' ? 'mm' : 'en'} passHref>
        <div className="cursor-pointer text-white flex  text-sm items-center shadow-sm bg-gray-700 rounded-md">
            <div className={`p-1 py-[.1rem]  rounded-tl-md rounded-bl-md ${router.locale === 'en' && 'bg-display'}`}>
                EN
            </div>
            <div className={`p-1 py-[.1rem]  rounded-tr-md rounded-br-md ${router.locale === 'mm' && 'bg-display'}`}>
                MM
            </div>
        </div>
    </Link >

    )
}

export default LocaleToggle;
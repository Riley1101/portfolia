import Link from 'next/link';
import Image from 'next/image';
import { ClassAttributes, AnchorHTMLAttributes, BlockquoteHTMLAttributes } from 'react';
const CustomLink = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props} className="text-display">{props.children}</a>
            </Link>
        );
    }

    return <a target="_blank" rel="noopener noreferrer" className="text-display" {...props} />;
};

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />;
}
function H1(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>) {
    return <h1 {...props} className='text-3xl text-white font-bold my-2 lg:text-2xl lg:my-4' />;
}

function H2(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>) {
    return <h2 {...props} className='text-2xl text-white font-bold my-2 lg:text-2xl lg:my-4' />;
}
function H3(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>) {
    return <h3 {...props} className='text-xl text-white font-bold my-2 lg:my-4' />;
}
function H4(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>) {
    return <h4 {...props} className='text-md text-white font-bold my-2 lg:my-4' />;
}



let P = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement>) => <p {...props} className='leading-loose text-read-100 text-[1.1rem] lg:text-[1.25rem]' />;

function UL(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLUListElement>) {
    return <ul {...props} className='text-white my-2 lg:my-4 list-disc px-4' />;
}

function OL(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLOListElement>) {
    return <ol {...props} className='text-white my-2 lg:my-4 list-decimal px-4' />;
}

function HR(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHRElement>) {
    return <hr {...props} className='my-3 block invisible lg:my-3' />;
}

function Quote(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & BlockquoteHTMLAttributes<HTMLElement>) {
    return <blockquote  {...props} className='block pl-5 py-1 border-l-[4px] my-8 lg:py-2' />;
}


function Pre(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLPreElement>) {
    return <pre {...props} className='pre-code' />;
}


const MDXComponents = {
    Image: RoundedImage,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    ul: UL,
    ol: OL,
    hr: HR,
    blockquote: Quote,
    pre: Pre,
    a: CustomLink,
};

export default MDXComponents;

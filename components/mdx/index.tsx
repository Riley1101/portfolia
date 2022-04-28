import Link from 'next/link';
import Image from 'next/image';
import { ClassAttributes, AnchorHTMLAttributes, BlockquoteHTMLAttributes, ImgHTMLAttributes } from 'react';
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


function H2(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>) {
    return <h1 {...props} />;
}
function H3(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>) {
    return <h3 {...props} />;
}
function H4(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>) {
    return <h3 {...props} />;
}

let P = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement>) => <p {...props} />;

function UL(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLUListElement>) {
    return <ul {...props} />;
}

function OL(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLOListElement>) {
    return <ol {...props} />;
}

function HR(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHRElement>) {
    return <hr {...props} />;
}

function Quote(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & BlockquoteHTMLAttributes<HTMLElement>) {
    return <blockquote  {...props} />;
}


function Pre(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLPreElement>) {
    return <pre {...props} className='pre-code ' />;
}


const MDXComponents = {
    Image: RoundedImage,
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

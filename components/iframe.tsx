<<<<<<< HEAD
import React from 'react'
import IframeResizer from 'iframe-resizer-react'

interface Props {
    url: string,
    title: string,
}

const Frame: React.FunctionComponent<Props> = ({ url, title }) => {
    const iframeRef = React.useRef(null)
    return (
        <div className='rounded-md shadow-md w-full '>
            <p className='block text-pale-100 text-xl mb-1'>{title}</p>
            <IframeResizer
                forwardRef={iframeRef}
                heightCalculationMethod="lowestElement"
                inPageLinks
                log
                // onMessage={onMessage}
                // onResized={onResized}
                src={url}
                className='rounded-md min-w-full aspect-video'
            />


        </div>



    )
}

=======
import React from 'react'
import IframeResizer from 'iframe-resizer-react'

interface Props {
    url: string,
    title: string,
}

const Frame: React.FunctionComponent<Props> = ({ url, title }) => {
    const iframeRef = React.useRef(null)
    return (
        <div className='rounded-md shadow-md w-full my-12'>
            <p className='block text-pale-100 text-md mb-1'>{title}</p>
            <IframeResizer
                forwardRef={iframeRef}
                heightCalculationMethod="lowestElement"
                inPageLinks
                log
                // onMessage={onMessage}
                // onResized={onResized}
                src={url}
                className='rounded-md min-w-full aspect-video'
            />


        </div>



    )
}

>>>>>>> main
export default Frame;
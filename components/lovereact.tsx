import React, { useEffect } from 'react'
import { useBlockMutation } from '@/queries/blockreact';
import { Blocks } from '@prisma/client'
import { debounce } from 'lodash';
interface Props {
    block: { data: Blocks }
}
const LoveReact: React.FunctionComponent<Props> = ({ block: { data: block } }) => {
    let [counter, setCounter] = React.useState<number>(0);
    let [current, setCurrent] = React.useState<number>(block?.blocks);
    let mutatuion = useBlockMutation();

    useEffect(() => {
        if (block) {
            setCurrent(block?.blocks);
        }
    }, [block])

    const delayedMutation = React.useCallback(debounce((data: number): void => {
        mutatuion.mutateAsync({ block: data })
    }, 1000), []);

    let handleLove = async () => {
        if (counter < 4) {
            let tmp = current
            tmp = tmp + 25;
            setCurrent(tmp);
            setCounter(counter + 1);
            delayedMutation(tmp);

        }
    }
    return (<div className='my-2 react-transform md:absolute' onClick={() => handleLove()}>
        <div className='flex items-center gap-4 '>
            <div className='w-4 h-4 bg-display rounded-sm m-1'></div>
            <h2 className='text-white text-display font-bold text-lg mb-[0px]'>{current} bars</h2>
        </div>
        <div className='border-display w-[250px] h-[3em] text-white  gap-1 rounded-sm cursor-pointer grid grid-cols-4'>
            {
                [...Array(counter)].map((_, i) => <div className='bg-display rounded-sm m-1' key={i}></div>)
            }

        </div>
        <span className=' block cursor-pointer text-white text-display font-bold text-lg mb-[0px] mt-4'>Please leave some bars <br /> if you love this article</span>
    </div>
    )
}

export default LoveReact;
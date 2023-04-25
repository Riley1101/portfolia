import React from 'react'

type Props = {}

export function Loader({}: Props) {
  return (
  <div className=' w-full lg:w-[60%] min-h-[70vh] grid justify-center items-center relative '>
  <div className='aspect-square pulse '>
<div className="min-h-[15rem] flex flex-col  shadow-sm rounded-xl">
  <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
    <div className="flex justify-center">
      <div className="animate-spin inline-block w-12 h-12 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</div>
  </div>
  </div>)
}


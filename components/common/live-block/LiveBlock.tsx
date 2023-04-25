"use client"
import React from 'react'
import { useStorage, useUpdateMyPresence, useOthers} from "@/utils/live-block" 
type Props = {}

function Cursor({ x, y }: { x: number; y: number }) {
  return (
    <div
      className='will-change-transform transition-all   bg-red-200 text-xl text-white z-20 absolute grid items-center justify-center  aspect-square'
      style={{
        transform: `translate(-50%, -50%)`,
        left: x,
        top: y,
      }}>
        😍
    </div>
  );
}

export function LiveBlock({}: Props) {
  const others = useOthers();
  const updateMyPresence = useUpdateMyPresence();
  const emojis= useStorage((root)=>root.emojis)
  return (
    <div className='overflow-hidden border w-full h-full mt-8' 
      onPointerMove={(e) =>{
        updateMyPresence({ cursor: { x: e.clientX, y: e.clientY } })
      }}
      onPointerLeave={() => updateMyPresence({ cursor: null })}>
      {others.map(({ connectionId, presence }) =>
        presence.cursor ? (
          <Cursor
            key={connectionId}
            x={presence.cursor.x}
            y={presence.cursor.y}
          />
        ) : null
      )}
      {
        emojis?.emojis.map((emoji)=><Cursor key={emoji.x} x={emoji.x} y={emoji.y} /> )
      }
    </div>
  )
}

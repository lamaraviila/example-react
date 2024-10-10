import React from 'react'

export const Card = ({nameCharacter,imgCharacter,quoteCharacter}) => {
  return (
    <div>
        <div className='flex justify-center bg-black w-2/5 text-cente font-semibold'>
            <img src={imgCharacter} alt={nameCharacter}/>
            <h2 className='text-white flex flex-wrap'></h2>
            <p className='text-white flex flex-wrap' >{quoteCharacter}</p>
        </div>
    </div>
  )
}

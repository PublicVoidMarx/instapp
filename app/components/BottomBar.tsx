import Image from 'next/image'
import React from 'react'

export default function BottomBar() {
  return (
    <div className='flex items-end flex-col justify-end fixed bottom-4 right-4 gap-4'>
      <Image src={'/find-icon.png'} alt='imageIcon' width={35} height={35} className='rounded-full object-cover' />
      <div className='flex gap-4'>
        <Image src={'/chat-icon.png'} alt='chatIcon' width={35} height={35} className='rounded-full object-cover bg-white' />
        <Image src={'/home-icon.png'} alt='homeIcon' width={35} height={35} className='rounded-full object-cover' />
      </div>
    </div>
  )
}

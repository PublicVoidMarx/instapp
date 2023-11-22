'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BottomBar() {
  const router = useRouter()

  return (
    <div className='flex items-end flex-col justify-end fixed bottom-4 right-4 gap-4'>
      <Image src={'/find-icon.png'} alt='imageIcon' width={35} height={35} className='rounded-full object-cover' onClick={() => router.push('/dashboard/find')} />
      <div className='flex gap-4'>
        <Image src={'/chat-icon.png'} alt='chatIcon' width={35} height={35} className='rounded-full object-cover bg-white' onClick={() => router.push('/dashboard/chats')} />
        <Image src={'/home-icon.png'} alt='homeIcon' width={35} height={35} className='rounded-full object-cover' onClick={() => router.push('/dashboard')}/>
      </div>
    </div>
  )
}

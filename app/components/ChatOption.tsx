'use client'
import { useRouter } from 'next/navigation'
import { Chat } from '../lib/definitions'
import Image from 'next/image'

export default function ChatOption(chat: Chat) {
  const router = useRouter()
  function handleClick(chatId: string) {
    router.push(`/dashboard/chats/${chatId}`)
  }
  return (
    <div key={chat.id} className='flex justify-between bg-lime-900 p-3' onClick={() => handleClick(chat.id)}>
      <div className='flex gap-2'>
        <Image src={chat.photo.toString()} alt='ChatPhoto' width={30} height={30} className='rounded-full object-cover' />
        {chat.id}
      </div>
      {chat.members.length}
    </div>
  )
}


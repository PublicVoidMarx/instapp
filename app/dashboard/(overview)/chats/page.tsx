import ChatOption from '@/app/components/ChatOption'
import { fetchChats } from '@/app/lib/data'
import React from 'react'

export default async function ChatsPage() {
  const chats = await fetchChats()

  return (
    <div className='h-screen bg-cyan-900'>
      <div className='text-center'>Most probable people you want to chat...</div>
      <br />
      <div className='flex flex-col gap-2'>
        {chats.map(chat => <ChatOption key={chat.id} {...chat} />)}
      </div>
    </div>
  )
}

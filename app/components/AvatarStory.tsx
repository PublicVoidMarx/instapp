'use client'
import Image from 'next/image'
import { useState } from 'react'
import { AvatarStory } from '../types/types'
import { useRouter } from 'next/navigation'

export default function AvatarStory({ image }: AvatarStory) {
  const [seen, setSeen] = useState(false)
  const router = useRouter()

  function handleClick() {
    setSeen(true)
  }

  if (seen) {
    router.push('dashboard/stories')
  }

  return (
    <Image
      onClick={handleClick}
      className={`rounded-full object-cover w-12 h-12 border-2 h-17 ${seen ? 'border-stone-600' : 'border-lime-500'}`}
      alt='Avatar Story'
      src={image}
      width={120}
      height={120}
    />
  )
}

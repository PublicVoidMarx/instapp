'use client'
import Image from 'next/image'
import { Post } from '../types/types'
import { likePost } from '../lib/actions'

export default function Post({ comment, image, likes, date }: Post) {
  async function handleDoubleClick() {
    await likePost({ idPost: 'AAAH124234' })
  }
  return (
    <div>
      <Image src={image} alt='Image Post' layout='responsive' height={350} width={300} onDoubleClick={handleDoubleClick} />
      <div className='flex justify-between p-2'>
        {/* {likes} likes   
        Quiza mejor borrar la idea de likes y enfocar a quien de tus amigos cercanos les gusto*/}
        $(close_friend) like this
        <div className='flex gap-3'>
          <Image src={'/comment-icon.png'} alt='comment-icon' width={25} height={25} />
          <Image src={'/share-icon.png'} alt='share-icon' width={25} height={25} />
        </div>
      </div>
      <div className='p-2'>{comment}</div>
      <div className='p-2'>{date}</div>

    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import { Post } from '../types/types'

export default function Post({ comment, image, likes }: Post) {
  return (
    <div>
      <Image src={image} alt='Image Post' layout='responsive' height={350} width={300} />
      <div>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        {likes}
      </div>
      <div>{comment}</div>

    </div>
  )
}

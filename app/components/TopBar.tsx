import Image from 'next/image'
import React from 'react'
import { AvatarStory } from '../types/types'
import AvatarStor from './AvatarStory'

const stories: AvatarStory[] = [
  { image: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg' },
  { image: 'https://img.freepik.com/free-photo/beauty-face-young-beautiful-woman_186202-6149.jpg' },
  { image: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg' },
  { image: 'https://img.freepik.com/free-photo/beauty-face-young-beautiful-woman_186202-6149.jpg' },
  { image: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg' },
  { image: 'https://img.freepik.com/free-photo/beauty-face-young-beautiful-woman_186202-6149.jpg' },
  { image: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg' }
]

export default function TopBar() {
  return (
    <div className='p-3'>
      <div className='flex gap-4 overflow-y-hidden no-scrollbar'>
        <AvatarStor image={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/1200px-Karl_Marx_001.jpg'} />
        {stories.map((storie, index) => (
          <AvatarStor image={storie.image} key={index} />
        ))}
      </div>
    </div>
  )
}

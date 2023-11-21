import Image from 'next/image'
import { Post } from '../../types/types'
import PostCard from '../../components/Post'

const posts: Post[] = [
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23 },
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23 },
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23 },
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23 },
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23 }
]

export default function Page() {
  return (
    <div className='flex flex-col justify-between overflow-auto'>
      {posts.map(post => (
        <>
          <PostCard comment={post.comment} image={post.image} likes={post.likes} key={post.image} />
          <br />
        </>
      ))}
    </div>
  )
}

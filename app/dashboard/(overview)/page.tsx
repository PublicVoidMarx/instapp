import { Post } from '../../types/types'
import PostCard from '../../components/Post'
import TopBar from '@/app/components/TopBar'

const dat = new Date().toLocaleString().split(',')[0]

const posts: Post[] = [
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23, date: dat },
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23, date: dat },
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23, date: dat },
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23, date: dat },
  { comment: 'estaba soleado', image: 'https://www.wallartprints.com.au/blog/wp-content/uploads/2019/05/sunset-photography-thirds-104787586.jpg', likes: 23, date: dat }
]

export default function Page() {
  return (
    <div>
      <TopBar />
      <div className='flex flex-col justify-between overflow-auto'>
        {posts.map(post => (
          <>
            <PostCard comment={post.comment} image={post.image} likes={post.likes} key={post.image} date={post.date} />
            <br />
          </>
        ))}
      </div>
    </div>

  )
}

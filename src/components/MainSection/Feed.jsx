import { PostData } from '../../data'
import FeedCard from "./FeedCard"

const Feed = () => {
  return (
    <div className="w-full mt-5">
      {PostData.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed

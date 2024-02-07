import { useEffect, useState } from "react"
// import { PostData } from "../../data"
import FeedCard from "./FeedCard"
import * as postService from "../../services/post"

const Feed = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    try {
      setLoading(true)
      const fetchingData = async () => {
        const data = await postService.allPosts()
        setPosts(data.posts)
        setLoading(false)
      }
      fetchingData()
    } catch (error) {
      setLoading(false)
      throw new Error(error)
    }
  }, [])

  return (
    <div className="mt-5 w-full">
      {/* {PostData.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))} */}
      {loading && (
        <div className="mx-auto h-screen text-center text-3xl">LOADING ...</div>
      )}
      {posts.map((post) => (
        <FeedCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Feed

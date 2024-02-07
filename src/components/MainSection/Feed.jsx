import { useEffect } from "react"
import Spinner from "../spinner/Spinner"
import FeedCard from "./FeedCard"
import * as postService from "../../services/post"
import {
  allPostsStart,
  allPostsSuccess,
  allPostsFailure,
} from "../../redux/postsSlice/postsSlice"
import { useDispatch, useSelector } from "react-redux"

const Feed = () => {
  const dispatch = useDispatch()
  const { loading, posts } = useSelector((state) => state.posts)

  useEffect(() => {
    try {
      dispatch(allPostsStart())
      const fetchingData = async () => {
        const data = await postService.allPosts()
        dispatch(allPostsSuccess(data.posts))
      }
      fetchingData()
    } catch (error) {
      dispatch(allPostsFailure(error))
    }
  }, [dispatch])

  return (
    <div className="mt-5 w-full">
      {loading && (
        <div className="mx-auto h-screen text-center text-3xl">
          <Spinner />
        </div>
      )}
      {posts?.map((post) => (
        <FeedCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Feed

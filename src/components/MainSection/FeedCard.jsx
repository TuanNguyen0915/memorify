import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa6"
import { TbMessage2 } from "react-icons/tb"
import { FiShare } from "react-icons/fi"
const FeedCard = ({ post }) => {
  console.log(post)

  return (
    <div className="mb-5 flex w-full flex-col gap-4 rounded-2xl rounded-lg bg-white p-4">
      <img
        src={post.imageUrl}
        alt="post"
        className="h-[400px] w-full rounded-lg object-contain"
      />
      <div className="flex items-center gap-5">
        <div className="flexCenter">
          {post.liked ? (
            <FaHeart className="text-3xl text-orange-1" />
          ) : (
            <FaRegHeart className="text-3xl" />
          )}
        </div>
        <TbMessage2 className="text-3xl" />
        <FiShare className="text-3xl" />
      </div>
      <p className="text-sm text-slate-400">{post.likes} likes</p>
      <div className="flex gap-5">
        <p className="font-xl max-w-[10rem] font-semibold">{post.author.firstName} {post.author.lastName}</p>
        <p>{post.description}</p>
      </div>
    </div>
  )
}

export default FeedCard

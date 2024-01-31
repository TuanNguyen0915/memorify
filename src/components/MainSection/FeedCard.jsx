import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa6"
import { TbMessage2 } from "react-icons/tb"
import { FiShare } from "react-icons/fi"
const FeedCard = ({ post }) => {
  return (
    <div className="mb-5 flex w-full flex-col gap-4 rounded-2xl bg-white p-4">
      <img
        src={post.url}
        alt="post"
        className="h-[400px] w-full rounded-lg object-cover"
      />
      <div className="flex items-center gap-5">
        {post.liked ? <FaHeart className="text-3xl text-orange-1"/> : <FaRegHeart className="text-3xl"/>}
        <TbMessage2 className="text-3xl" />
        <FiShare className="text-3xl" />
      </div>
      <p className="text-sm text-slate-400">{post.likes} likes</p>
      <div className="flex gap-5">
        <p className="font-xl max-w-[10rem] font-semibold">{post.name}</p>
        <p>{post.description}</p>
      </div>
    </div>
  )
}

export default FeedCard

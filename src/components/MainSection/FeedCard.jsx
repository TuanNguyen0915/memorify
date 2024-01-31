const FeedCard = ({ post }) => {
  return (
    <div className="mb-5 flex w-full flex-col gap-1 rounded-2xl bg-white p-4">
      <img
        src={post.url}
        alt="post"
        className="h-[400px] w-full rounded-lg object-cover"
      />
      <div className="flex items-center gap-5">
        <p>like</p>
        <p>comment</p>
        <p>share</p>
      </div>
      <p className="text-sm text-slate-400">{post.likes} likes</p>
      <div className="flex gap-5">
        <p className="font-xl font-semibold">{post.name}</p>
        <p>{post.description}</p>
      </div>
    </div>
  )
}

export default FeedCard

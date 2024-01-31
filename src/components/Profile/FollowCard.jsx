import { followers } from "../../data/follower.data"

const FollowCard = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-lg font-semibold">Who is following you</p>
      {followers.map((user, idx) => (
        <div className="flex w-full items-center gap-2" key={idx}>
          <div className="h-14 w-14 rounded-full">
            <img
              src={user.img}
              alt="avatar"
              className="h-14 w-14 rounded-full object-fill"
            />
          </div>
          <div className="flex flex-col items-start justify-start text-sm text-gray-500">
            <p>{user.name}</p>
            <p>@{user.userName}</p>
          </div>
          <div className="mr-4 flex items-center justify-end ml-auto">
            <button className="btn w-full rounded-md px-3 py-1 text-white duration-500 hover:scale-125">
              Follow
            </button>
          </div>
        </div>
      ))}
      <p className="w-full text-center text-sm font-semibold text-orange-1">
        show more
      </p>
    </div>
  )
}

export default FollowCard

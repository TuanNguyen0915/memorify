import { followers } from "../../data"
import Button from "../Button"

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
          <div className="ml-auto mr-4 flex items-center justify-end">
            <Button text={"Follow"} />
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

import { followers } from "../../data/follower.data";

const FollowCard = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-lg font-semibold">Who is following you</p>
      {followers.map((user, idx) => (
        <div className="flexBetween w-full gap-4" key={idx}>
          <img
            src={user.img}
            alt="avatar"
            className="h-14 w-14 rounded-full object-center"
          />
          <div className="flex w-full flex-col text-sm text-gray-500">
            <p>{user.name}</p>
            <p>@{user.userName}</p>
          </div>
          <div className="flex items-center justify-end mr-4">
            <button className="btn rounded-md px-3 py-1 text-white hover:scale-125 duration-500">
              Follow
            </button>
          </div>
        </div>
      ))}
      <p className="w-full text-center text-orange-1 font-semibold text-sm">show more</p>
    </div>
  );
};

export default FollowCard;

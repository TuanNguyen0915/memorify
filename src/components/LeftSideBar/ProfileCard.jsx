import avatar from "/avatar.jpeg";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ProfileCard = () => {
  const navigate = useNavigate()

  return (
    <div className=" flex w-full flex-col gap-4 rounded-3xl bg-white">
      <div className="relative h-[150px] w-full">
        <div
          className="absolute right-5 top-5 z-10 rounded-lg bg-red-500 p-2 text-white opacity-80 duration-500 hover:scale-125 hover:opacity-100"
          onClick={() => console.log("Sign Out")}
        >
          <FaSignOutAlt />
        </div>
        <div className="z-4 absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-t-3xl bg-black/40"></div>
        <img
          src="https://source.unsplash.com/random/500x150"
          alt="banner"
          className=" h-full w-full rounded-t-3xl object-cover"
          loading="lazy"
        />
      </div>
      <div className="flexCenter  -mb-16 -translate-y-16">
        <img
          src={avatar}
          alt="avatar"
          className="h-32 w-32 rounded-full"
          loading="lazy"
        />
      </div>
      {/* INFO */}
      <div className="z-10  flex w-full flex-col items-center p-4">
        <p className="text-xl font-bold">Tuan Nguyen</p>
        <p>Junior FullStack</p>
      </div>
      <div className="flexCenter border-hrColor z-10 mx-4 border-b-2 border-t-2 p-4">
        <div className="border-hrColor flex w-full flex-col items-center justify-center border-e-2">
          <p className="font-semibold">1235</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <p className="font-semibold">1</p>
          <p className="text-gray-500">Following</p>
        </div>
      </div>
      <div className="flexCenter z-10 my-4 w-full">
        <p className="text-orange-1 text-xl font-bold cursor-pointer" onClick={()=> navigate('/profile')}>My Profile</p>
      </div>
    </div>
  );
};

export default ProfileCard;

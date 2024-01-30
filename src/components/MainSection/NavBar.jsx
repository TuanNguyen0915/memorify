import avatar from "/avatar.jpeg";
import { MdPhoto } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { useRef, useState } from "react";

const NavBar = () => {
  // const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    const file = e.target.files[0]
    
  };

  return (
    <nav className="z-10 flex w-full gap-4 rounded-lg bg-white p-4">
      <img src={avatar} alt="avatar" className="h-14 w-14 rounded-full" />
      <div className="flex w-full flex-col gap-2">
        <input
          type="text"
          placeholder="What's happening?"
          className="w-full rounded-lg bg-slate-200 p-3 outline-none"
        />
        <div className="flexBetween w-full px-3">
          <label className="text-photo flex cursor-pointer items-center gap-1">
            <MdPhoto className="scale-150" />
            <p>Photo</p>
            <input
              type="file"
              name="image"
              hidden
              ref={imageRef}
              onChange={onImageChange}
            />
          </label>

          <div className="text-video flex cursor-pointer items-center gap-1">
            <RiVideoFill className="scale-150" />
            <p>Video</p>
          </div>
          <div className="text-location flex cursor-pointer items-center gap-1">
            <MdOutlineLocationOn className="scale-150" />
            <p>Location</p>
          </div>
          <div className="text-schedule flex cursor-pointer items-center gap-1">
            <FaCalendarAlt className="scale-150" />
            <p>Schedule</p>
          </div>
          <button className="btn rounded-lg px-4 py-2 text-white">Share</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

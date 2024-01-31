import avatar from "/avatar.jpeg"
import { MdOutlineLocationOn } from "react-icons/md"
import { FaCalendarAlt } from "react-icons/fa"
import AddImage from "./AddImage"
import AddVideo from "./AddVideo"
import { motion } from "framer-motion"
const NavBar = ({ setImage, imageRef, setVideo, videoRef }) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="z-10 flex w-full gap-4 rounded-lg bg-white p-4"
    >
      <img src={avatar} alt="avatar" className="h-14 w-14 rounded-full" />
      <div className="flex w-full flex-col gap-2">
        <input
          type="text"
          placeholder="What's happening?"
          className="w-full rounded-lg bg-slate-200 p-3 outline-none"
        />
        <div className="flexBetween w-full px-3">
          <AddImage setImage={setImage} imageRef={imageRef} />
          <AddVideo setVideo={setVideo} videoRef={videoRef} />
          <div className="flex cursor-pointer items-center gap-1 text-location">
            <MdOutlineLocationOn className="scale-150" />
            <p className="hidden lg:flex">Location</p>
          </div>
          <div className="flex cursor-pointer items-center gap-1 text-schedule">
            <FaCalendarAlt className="scale-150" />
            <p className="hidden lg:flex">Schedule</p>
          </div>
          <button className="rounded-lg border border-orange-1 bg-orange-1 px-4 py-2 text-white duration-500 hover:bg-transparent hover:text-orange-1">
            Share
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default NavBar

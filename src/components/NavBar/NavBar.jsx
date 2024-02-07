import avatar from "/avatar.jpeg"
import { MdOutlineLocationOn } from "react-icons/md"
import { FaCalendarAlt } from "react-icons/fa"
import AddImage from "./AddImage"
import AddVideo from "./AddVideo"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import PreviewSection from "../MainSection/PreviewSection"
import { uploadToFireBase } from "../../services/uploadToFirebase"
import { createPost } from "../../services/post"
import { useSelector } from "react-redux"

const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [loading, setLoading] = useState(false)
  // { setImage, imageRef, setVideo, videoRef }
  const [typePost, SetTypePost] = useState("")
  const [image, setImage] = useState(null)
  const imageRef = useRef()
  const [video, setVideo] = useState(null)
  const videoRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      if (image) {
        const imageURL = await uploadToFireBase(image)
        const formData = {
          author: currentUser.user._id,
          description: typePost,
          imageUrl: imageURL,
        }
        await createPost(formData)
      }
      setLoading(false)
      setImage(null)
      setVideo(null)
      SetTypePost(null)
    } catch (error) {
      setLoading(false)
      throw new Error(error)
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-between">
      {currentUser && (
        <motion.nav
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`flex w-full gap-4 bg-white p-4 ${typePost || image || video ? "rounded-t-lg" : "rounded-lg"}`}
        >
          <img src={avatar} alt="avatar" className="h-14 w-14 rounded-full" />
          <div className="flex w-full flex-col gap-2">
            <input
              onChange={(e) => SetTypePost(e.target.value)}
              value={typePost}
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
              <div className="flexCenter" onClick={handleSubmit}>
                <button
                  disabled={loading}
                  className="w-full rounded-lg border border-orange-1 bg-orange-1 px-4 py-2 text-white duration-500 hover:bg-transparent hover:text-orange-1 disabled:opacity-30"
                >
                  Shared
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
      {(typePost || image || video) && (
        <div className="z-10 flex h-[500px] w-full flex-col gap-5 rounded-b-lg bg-white p-4">
          {/* <p className="text-3xl">{typePost}</p> */}
          <input
            onChange={(e) => SetTypePost(e.target.value)}
            value={typePost}
            type="text"
            className="w-full bg-none text-3xl outline-none"
          />
          <PreviewSection
            image={image}
            setImage={setImage}
            video={video}
            setVideo={setVideo}
            imageRef={imageRef}
            videoRef={videoRef}
            loading={loading && loading}
          />
        </div>
      )}
    </div>
  )
}

export default NavBar

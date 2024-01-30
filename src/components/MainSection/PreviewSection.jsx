import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"
const PreviewSection = ({
  image,
  video,
  setImage,
  setVideo,
  imageRef,
  videoRef,
}) => {
  const handleOnClickClose = () => {
    setImage(null)
    setVideo(null)
  }
  return (
    <div className="flexCenter w-full">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 0.75}}
        className="relative flex w-1/2 items-center justify-center"
      >
        {(image || video) && (
          <div
            className="absolute -right-10 top-5 z-10 duration-500 hover:scale-150"
            onClick={handleOnClickClose}
          >
            <IoClose className="scale-150 text-slate-600" />
          </div>
        )}
        {image && <img src={imageRef.current} className="w-full" />}
        {video && (
          <video
            src={videoRef.current}
            className="w-full"
            controls="controls"
            autoPlay="off"
          />
        )}
      </motion.div>
    </div>
  )
}

export default PreviewSection

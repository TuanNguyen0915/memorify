import { IoClose } from "react-icons/io5"
import Spinner from "../spinner/Spinner"

const PreviewSection = ({
  loading,
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
    <div className="flex justify-center gap-10 w-full max-md:h-1/2">
      {loading ? <Spinner color={"orange"} /> : ""}
      <div
        className={`relative flex md:w-1/2 items-center justify-center ${loading ? "opacity-0" : "opacity-100"}`}
      >
        {(image || video) && (
          <div
            className="absolute -right-10 top-5  duration-500 hover:scale-150"
            onClick={handleOnClickClose}
          >
            <IoClose className="scale-150 text-slate-600" />
          </div>
        )}
        {image && <img src={imageRef.current} className="w-full h-full object-contain" />}
        {video && (
          <video
            src={videoRef.current}
            className="w-full"
            controls="controls"
            autoPlay="off"
          />
        )}
      </div>
    </div>
  )
}

export default PreviewSection

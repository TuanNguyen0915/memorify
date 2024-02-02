import { IoClose } from "react-icons/io5"

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
      <div className="relative flex w-1/2 items-center justify-center">
        {(image || video) && (
          <div
            className="absolute -right-10 top-5  duration-500 hover:scale-150"
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
      </div>
    </div>
  )
}

export default PreviewSection

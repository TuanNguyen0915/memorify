import { useRef, useState } from "react"
import NavBar from "../NavBar/NavBar"
import { IoClose } from "react-icons/io5"

const MainSection = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const [video, setVideo] = useState(null)
  const videoRef = useRef()

  const handleOnClickClose = () => {
    setImage(null)
    setVideo(null)
  }
  return (
    <section className="flex w-full flex-col">
      <NavBar
        imageRef={imageRef}
        setImage={setImage}
        videoRef={videoRef}
        setVideo={setVideo}
      />
      <div className="flexCenter w-full">
        <div className="relative flex w-1/2 items-center justify-center">
          {(image || video) && (
            <div
              className="absolute right-5 top-5 z-10 hover:scale-150"
              onClick={handleOnClickClose}
            >
              <IoClose className="scale-150 text-red-600" />
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
    </section>
  )
}

export default MainSection

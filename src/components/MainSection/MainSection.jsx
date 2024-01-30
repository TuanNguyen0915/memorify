import { useRef, useState } from "react"
import NavBar from "../NavBar/NavBar"

const MainSection = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const [video, setVideo] = useState(null)
  const videoRef = useRef()

  return (
    <section className="flex w-full flex-col">
      <NavBar
        imageRef={imageRef}
        setImage={setImage}
        videoRef={videoRef}
        setVideo={setVideo}
      />
      {image && (
        <div className="flex w-full items-center justify-center">
          <img src={imageRef.current} className="w-1/2" />
        </div>
      )}
      {video && (
        <div className="flex w-full items-center justify-center">
          <video
            src={videoRef.current}
            className="w-1/2"
            controls="controls"
            autoPlay="off"
          />
        </div>
      )}
    </section>
  )
}

export default MainSection

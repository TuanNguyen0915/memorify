import { useRef, useState } from "react"
import NavBar from "../NavBar/NavBar"
import PreviewSection from "./PreviewSection"

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
      <PreviewSection
        image={image}
        setImage={setImage}
        video={video}
        setVideo={setVideo}
        imageRef={imageRef}
        videoRef={videoRef}
      />
    </section>
  )
}

export default MainSection

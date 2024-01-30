import React from "react"
import { RiVideoFill } from "react-icons/ri"

const AddVideo = ({ videoRef, setVideo }) => {
  const handleChange = (e) => {
    if (setVideo) {
      if (e.target.files && e.target.files[0]) setVideo(e.target.files[0])
      videoRef.current = URL.createObjectURL(e.target.files[0])
    }
  }
  return (
    <label className="flex cursor-pointer items-center gap-1 text-video">
      <RiVideoFill className="scale-150" />
      <p>Video</p>
      <input type="file" accept="video/*" name="image" hidden ref={videoRef} onChange={handleChange} />
    </label>
  )
}

export default AddVideo

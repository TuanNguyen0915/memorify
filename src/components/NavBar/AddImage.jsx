import { MdPhoto } from "react-icons/md"

const AddImage = ({ setImage, imageRef }) => {
  const handleOnChange = (e) => {
    if (setImage) {
      if (e.target.files && e.target.files[0]) setImage(e.target.files[0])
      imageRef.current = URL.createObjectURL(e.target.files[0])
    }
  }

  return (
    <label className="flex cursor-pointer items-center gap-1 text-photo">
      <MdPhoto className="scale-150" />
      <p className="hidden lg:flex">Photo</p>
      <input
        type="file"
        accept="image/*"
        name="image"
        hidden
        ref={imageRef}
        onChange={handleOnChange}
      />
    </label>
  )
}

export default AddImage

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE,
  projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE,
  appId: import.meta.env.VITE_APP_ID_FIREBASE,
}

const app = initializeApp(firebaseConfig)
const imageDb = getStorage(app)

export const uploadToFireBase = async (file) => {
  const imageRef = ref(
    imageDb,
    `${file?.name.split(".")[0]}_${new Date().getTime()}`,
  )
  await uploadBytes(imageRef, file)
  const url = await getDownloadURL(imageRef)
  return url
}

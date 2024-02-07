const BASE_URL = import.meta.env.VITE_SERVER_URL

const createPost = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/post/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const json = await res.json()
    return json
  } catch (error) {
    throw new Error(error.message)
  }
}

const allPosts = async() => {
  try {
    const posts = await ((await fetch(`${BASE_URL}/post`))).json()
    return posts
  } catch (error) {
    throw new Error(error.message)
  }
}

export { createPost, allPosts }

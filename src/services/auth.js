
const BASE_URL = import.meta.env.VITE_SERVER_URL

const login = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "post",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const json = await res.json()
    return json
  } catch (error) {
    throw new Error(error)
  }
}

const register = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "post",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const json = await res.json()
    return json
  } catch (error) {
    throw new Error(error)
  }
}

export { login, register }

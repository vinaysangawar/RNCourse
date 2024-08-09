import axios from "axios"

const API_KEY = "AIzaSyB52shAh62llCVj9RUBZBVPzM3vyR8yBJw"

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  })

  const token = response.data.idToken

  return token
}

export async function createUser(email, password) {
  return authenticate("signUp", email, password)
}

export async function loginUser(email, password) {
  return authenticate("signInWithPassword", email, password)
}

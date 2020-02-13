import axios from 'axios'


const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const getPosts = async () => {
  const posts = await api.get("/posts");
  return posts.data;
}

export const getPost = async (id) => {
  const posts = await api.get(`/posts/${id}`);
  return posts.data;
}

export  const loginUser = async(loginData) => {
  const resp = (await api.post('/auth/login', loginData)).data.auth_resp;
  api.defaults.headers.common.authorization = `Bearer ${resp.auth_token}`;
  localStorage.setItem('authToken', resp.auth_token);
  localStorage.setItem('name', resp.user.name);
  localStorage.setItem('email', resp.user.email);
  return resp.user
}

export  const registerUser = async(loginData) => {
  try {
    const resp = (await api.post('/auth/login', loginData)).data.auth_resp;
    api.defaults.headers.common.authorization = `Bearer ${resp.auth_token}`;
    localStorage.setItem('authToken', resp.auth_token);
    localStorage.setItem('name', resp.user.name);
    localStorage.setItem('email', resp.user.email);
    return resp.user
  } catch(e) {
    console.log(e.response);
    if(e.response.status === 422) {
      return {errorMessage: "Email is Already Associated with user."}
    }
  }

}

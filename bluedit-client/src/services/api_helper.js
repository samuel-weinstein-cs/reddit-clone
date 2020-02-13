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
  const resp = await api.post('/auth/login', loginData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('name', resp.data.user.name);
  localStorage.setItem('email', resp.data.user.email);
  return resp.data.user
}

export  const registerUser = async(loginData) => {
  try {
    const resp = await api.post('/users/', loginData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    return resp.data.user
  } catch(e) {
    console.log(e.response);
    if(e.response.status === 422) {
      return {errorMessage: "Email is Already Associated with user."}
    }
  }

}

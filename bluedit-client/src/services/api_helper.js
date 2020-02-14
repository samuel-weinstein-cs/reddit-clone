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

export const getComments = async(id) => {
  const comments = await api.get(`/posts/${id}/comments`);
  return comments.data
}

export const loginUser = async(loginData) => {
  const resp = (await api.post('/auth/login', loginData)).data.auth_resp;
  api.defaults.headers.common.authorization = `Bearer ${resp.auth_token}`;
  localStorage.setItem('authToken', resp.auth_token);
  localStorage.setItem('userId', resp.user.id);
  return resp.user
}

export const registerUser = async(loginData) => {
  try {
    const resp = (await api.post('/auth/login', loginData)).data.auth_resp;
    api.defaults.headers.common.authorization = `Bearer ${resp.auth_token}`;
    localStorage.setItem('authToken', resp.auth_token);
    localStorage.setItem('userId', resp.user.id);
    return resp.user
  } catch(e) {
    console.log(e.response);
    if(e.response.status === 422) {
      return {errorMessage: "Email is Already Associated with user."}
    }
  }

}

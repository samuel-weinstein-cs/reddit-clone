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

export const newPost = async(postData) => {
  await api.post(`/posts/`, postData);
}

export const getComments = async(id) => {
  const comments = await api.get(`/posts/${id}/comments`);
  return comments.data
}

export const postComment= async(postId, commentData) => {
  await api.post(`/posts/${postId}/comments`, commentData);
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

export const verifyUser = async() => {
  const token = localStorage.getItem('authToken');
  if(token){
    api.defaults.headers.common.authorization = `Bearer ${token}`;

  }
  const userId = localStorage.getItem('userId');
  if(userId){
    const user = await api.get(`/users/${userId}`);
    return user.data;
  } else {
    return null;
  }
}

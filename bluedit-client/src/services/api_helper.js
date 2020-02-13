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
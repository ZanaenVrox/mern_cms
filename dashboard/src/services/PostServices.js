import requests from "./httpService";

const PostServices = {
  getAllPosts() {
    return requests.get("/posts/");
  },
  createPosts(body) {
    return requests.post(`/posts/create`, body);
  },
  getPostsById(id) {
    return requests.get(`/posts/${id}`);
  },
  updatePosts(id, body) {
    return requests.put(`/posts/${id}`, body);
  },
  deletePosts(id) {
    return requests.delete(`/posts/${id}`);
  },
};

export default PostServices;

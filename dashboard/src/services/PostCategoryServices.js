import requests from "./httpService";

const PostCategoryServices = {
  getAllCategories() {
    return requests.get(`/posts/category/`);
  },
  createCategory(body) {
    return requests.post(`/posts/category/create`, body);
  },
  getCategoryById(id) {
    return requests.post(`/posts/category/${id}`);
  },
  updateCategory(id, body) {
    return requests.put(`/posts/category/${id}`, body);
  },
  deleteCategory(id) {
    return requests.delete(`/posts/category/${id}`);
  },
};

export default PostCategoryServices;

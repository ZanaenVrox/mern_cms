import requests from "./httpService";

const AdminServices = {
  loginAdmin(body) {
    return requests.post(`/admin/login`, body);
  },
  ChangeAdminPassword(body) {
    return requests.put(`/admin/change_password`, body);
  },
};

export default AdminServices;

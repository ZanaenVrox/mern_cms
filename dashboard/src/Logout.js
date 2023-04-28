import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { notifySuccess } from "./utils/toast";

export const Logout = () => {
  const navigate = useNavigate();
  secureLocalStorage.removeItem("adminInfo");
  navigate("/");
  notifySuccess("User Loged Out");
};

import axios from "axios";
import { Toast } from "vant";

axios.defaults.baseURL =
  process.env.NODE_ENV == "development"
    ? "//localhost:8081/api/v1"
    : "//localhost:8081/api/v1";
axios.defaults.withCredentials = true;
//封装请求的基础路径
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
//自定义请求头
axios.defaults.headers["token"] = localStorage.getItem("token") || "";
//统一请求头的Content-Type类型为application/json
axios.defaults.headers.post["Content-Type"] = "application/json";


//axios拦截器
axios.interceptors.response.use((res) => {
  if (typeof res.data !== "object") {
    Toast.fail("服务端异常！");
    return Promise.reject(res);
  }
  if (res.data.resultCode != 200) {
    if (res.data.message) Toast.fail(res.data.message);
    if (res.data.resultCode == 416) {
      window.vRouter.push({ path: "/login" });
    }
    return Promise.reject(res.data);
  }
  return res.data;
});

export default axios;

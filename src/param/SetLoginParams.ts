// 导入axios实例
import service from "@/request";
import { Users } from "@/bean/UserBean";
// 获取手机验证码
interface SetLoginParam {
  phone: string;
  code: number;
  login_type: number;
}

// 获取用户信息
export default function apiSetLogin(param: SetLoginParam) {
  return service({
    url: "/login/setLogin",
    method: "get",
    params: param,
  });
}

// 导入axios实例
import httpRequest from "@/request";
// 获取手机验证码
interface GetCodeParam {
  phone: string;
  type: string;
}

// 获取用户信息
export default function apiGetCode(param: GetCodeParam) {
  return httpRequest({
    url: "/login/getCode",
    method: "get",
    data: param,
  });
}

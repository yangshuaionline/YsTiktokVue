// 导入axios实例
import service from "@/request";
// 获取手机验证码
interface GetCodeParam {
  phone: string;
  code_type: number;
}

// 获取用户信息
export default function apiGetCode(param: GetCodeParam) {
  return service({
    url: "/login/getCode",
    method: "get",
    params: param,
  });
}

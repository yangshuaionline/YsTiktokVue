export interface Users {
  //账号
  account: string;
  //头像
  head_pic: string;
  //uid
  id: number;
  //个人简介
  introduction: string;
  //ip
  ip: string;
  //登录type 0为app  1为运营后台
  login_type: number;
  //手机号
  phone: string;
  //职位（权限）
  pos: number;
  //密码
  pw: string;
  //token
  token: string;
  //用户名
  user_name: string;
}

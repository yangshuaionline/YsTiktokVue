import { LocalStorageUtil } from "@/utils/LocalStorageUtil";
/**
 * 用户信息本地存储管理类
 */
class UserManager {
  private TAG = "ys_tiktok_vue_user_manager";
  //账号
  public setAccount(account: string): void {
    LocalStorageUtil.setItem(this.TAG + "account", account);
  }
  public getAccount(): string | null {
    return LocalStorageUtil.getItem(this.TAG + "account");
  }
  //头像
  public setHeadPic(head_pic: string): void {
    LocalStorageUtil.setItem(this.TAG + "head_pic", head_pic);
  }
  public getHeadPic(): string | null {
    return LocalStorageUtil.getItem(this.TAG + "head_pic");
  }
  //uid
  public setId(id: number): void {
    LocalStorageUtil.setItem(this.TAG + "id", id);
  }
  public getId(): number | null {
    return LocalStorageUtil.getItem(this.TAG + "id");
  }
  //个人简介
  public setIntroduction(introduction: string): void {
    if (
      introduction == null ||
      introduction == undefined ||
      introduction.trim.length == 0
    ) {
      introduction = "这个家伙很懒，什么也没有留下......";
    }
    LocalStorageUtil.setItem(this.TAG + "introduction", introduction);
  }
  public getIntroduction(): string | null {
    return LocalStorageUtil.getItem(this.TAG + "introduction");
  }
  //ip
  public setIp(ip: string): void {
    LocalStorageUtil.setItem(this.TAG + "ip", ip);
  }
  public getIp(): string | null {
    return LocalStorageUtil.getItem(this.TAG + "ip");
  }
  //登录type 0为app  1为运营后台
  public setLoginType(login_type: number): void {
    LocalStorageUtil.setItem(this.TAG + "login_type", login_type);
  }
  public getLoginType(): number | null {
    return LocalStorageUtil.getItem(this.TAG + "login_type");
  }
  //手机号
  public setPhone(phone: string): void {
    LocalStorageUtil.setItem(this.TAG + "phone", phone);
  }
  public getPhone(): number | null {
    return LocalStorageUtil.getItem(this.TAG + "phone");
  }
  //职位（权限）
  public setPos(pos: number): void {
    LocalStorageUtil.setItem(this.TAG + "pos", pos);
  }
  public getPos(): number | null {
    return LocalStorageUtil.getItem(this.TAG + "pos");
  }
  //密码
  public setPw(pw: string): void {
    LocalStorageUtil.setItem(this.TAG + "pw", pw);
  }
  public getPw(): string | null {
    return LocalStorageUtil.getItem(this.TAG + "pw");
  }
  //token
  public setToken(token: string): void {
    LocalStorageUtil.setItem(this.TAG + "token", token);
  }
  public getToken(): string | null {
    return LocalStorageUtil.getItem(this.TAG + "token");
  }
  //用户名
  public setUserName(user_name: string): void {
    LocalStorageUtil.setItem(this.TAG + "user_name", user_name);
  }
  public getUserName(): string | null {
    return LocalStorageUtil.getItem(this.TAG + "user_name");
  }
}

const userManager = new UserManager();
export default userManager;

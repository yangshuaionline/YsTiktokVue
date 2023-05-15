//手机号验证
class PhoneUtils {
  /**
   * 验证是否为合法的中国大陆手机号码
   * @param phoneNumber 手机号码字符串
   * @returns 如果为合法手机号码，返回 true；否则返回 false
   */
  public static isValidPhoneNumber(phoneNumber: string): boolean {
    const pattern = /^1[3-9]\d{9}$/;
    return pattern.test(phoneNumber);
  }
}

export default PhoneUtils;

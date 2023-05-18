interface LocalStorageData<T> {
  value: T;
  expires?: number;
}

export class LocalStorageUtil {
  /**
   * 获取 localStorage 中指定 key 的值
   * @param {string} key - 要获取的数据项的 key
   * @return {T | null} 返回获取到的数据，如果不存在就返回 null
   */
  static getItem<T>(key: string): T | null {
    const data: LocalStorageData<T> = JSON.parse(
      localStorage.getItem(key) || "{}"
    );
    if (data.expires && Date.now() >= data.expires) {
      // 数据已经过期
      localStorage.removeItem(key); // 删除该数据项
      return null;
    }
    return data.value;
  }

  /**
   * 设置 localStorage 中指定 key 的值，可以设定过期时间
   * @param {string} key - 要设置的数据项的 key
   * @param {T} value - 要设置的数据项的值
   * @param {number} expires - 数据过期时间（单位：毫秒）
   */
  static setItem<T>(key: string, value: T, expires = 0): void {
    const data: LocalStorageData<T> = { value };
    if (expires > 0) {
      data.expires = Date.now() + expires;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }
}

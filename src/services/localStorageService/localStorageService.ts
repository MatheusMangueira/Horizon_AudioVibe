export class LocalStorageService {
  static setToken(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static getToken(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
  }
}

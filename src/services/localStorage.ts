export const setLocalStorageItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key: string): any => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
};

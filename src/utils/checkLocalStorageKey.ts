const checkLocalStorageKey = (key: string, func: (arg: boolean) => void) => {
  const keyExists = localStorage.getItem(key) !== null;
  keyExists ? func(true) : func(false);
};

export default checkLocalStorageKey;

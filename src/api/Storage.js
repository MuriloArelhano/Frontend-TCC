class Storage {
  static setItem(key, value) {
    try {
      let valueToStorage = value;

      if (typeof value === 'object') {
        valueToStorage = JSON.stringify(value);
      }

      localStorage.setItem(key, valueToStorage);
    } catch (error) {
      console.error(error.message);
    }
  }

  static getItem(key) {
    try {
      const item = localStorage.getItem(key);

      return JSON.parse(item);
    } catch (error) {
      console.error(error.message);
    }
  }

  static removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default Storage;

export default {
  get: (k) => {
    try {
      return JSON.parse(localStorage.getItem(k)); // eslint-disable-line
    } catch (e) {
      return null;
    }
  },
  set: (k, v) => {
    localStorage.setItem(k, JSON.stringify(v)); // eslint-disable-line
  },
};

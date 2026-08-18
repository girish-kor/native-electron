export const platformAdapter = {
  name: 'web',
  async getItem(key) {
    return window.localStorage.getItem(key);
  },
  async setItem(key, value) {
    window.localStorage.setItem(key, value);
  },
  async openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  },
};

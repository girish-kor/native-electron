export const platformAdapter = {
  name: 'electron',
  async getItem(key) {
    return window.electronAPI.getItem(key);
  },
  async setItem(key, value) {
    return window.electronAPI.setItem(key, value);
  },
  async openLink(url) {
    return window.electronAPI.openLink(url);
  },
};

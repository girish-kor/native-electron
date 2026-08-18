import { Linking } from 'react-native';

const memoryStore = new Map();

export const platformAdapter = {
  name: 'native',
  async getItem(key) {
    return memoryStore.has(key) ? memoryStore.get(key) : null;
  },
  async setItem(key, value) {
    memoryStore.set(key, value);
  },
  async openLink(url) {
    return Linking.openURL(url);
  },
};

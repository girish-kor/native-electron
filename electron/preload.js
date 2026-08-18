const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getItem: (key) => ipcRenderer.invoke('store:get', key),
  setItem: (key, value) => ipcRenderer.invoke('store:set', key, value),
  openLink: (url) => ipcRenderer.invoke('shell:openLink', url),
});

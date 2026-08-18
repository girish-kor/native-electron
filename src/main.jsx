import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { PlatformProvider } from './platform/context.jsx';
import { platformAdapter as webAdapter } from './platform/web';
import { platformAdapter as electronAdapter } from './platform/electron';
import './styles/index.css';

const isElectron = typeof window !== 'undefined' && Boolean(window.electronAPI);
const adapter = isElectron ? electronAdapter : webAdapter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlatformProvider value={adapter}>
      <App />
    </PlatformProvider>
  </React.StrictMode>,
);

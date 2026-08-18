import { registerRootComponent } from 'expo';
import App from '../src/App.jsx';
import { PlatformProvider } from '../src/platform/context.jsx';
import { platformAdapter } from '../src/platform/native';
import '../src/styles/index.css';

function Root() {
  return (
    <PlatformProvider value={platformAdapter}>
      <App />
    </PlatformProvider>
  );
}

registerRootComponent(Root);

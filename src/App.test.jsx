import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import { PlatformProvider } from './platform/context.jsx';

const testAdapter = {
  name: 'test',
  async getItem() {
    return null;
  },
  async setItem() {},
  async openLink() {},
};

function renderApp() {
  return render(
    <PlatformProvider value={testAdapter}>
      <App />
    </PlatformProvider>,
  );
}

describe('App', () => {
  it('renders the current platform name', () => {
    renderApp();
    expect(screen.getByText(/Running on: test/)).toBeInTheDocument();
  });

  it('increments the counter on button press', async () => {
    renderApp();
    expect(screen.getByText('0')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Increment'));
    expect(await screen.findByText('1')).toBeInTheDocument();
  });
});

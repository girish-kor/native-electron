import { useContext } from 'react';
import { PlatformContext } from '../platform/context.jsx';

export function usePlatformAdapter() {
  const adapter = useContext(PlatformContext);
  if (!adapter) {
    throw new Error('usePlatformAdapter must be used within a PlatformProvider');
  }
  return adapter;
}

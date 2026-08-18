import { View as RNView } from 'react-native';

export function View({ className = '', children, ...props }) {
  return (
    <RNView className={className} {...props}>
      {children}
    </RNView>
  );
}

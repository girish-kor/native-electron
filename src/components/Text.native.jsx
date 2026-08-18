import { Text as RNText } from 'react-native';

export function Text({ className = '', children, ...props }) {
  return (
    <RNText className={className} {...props}>
      {children}
    </RNText>
  );
}

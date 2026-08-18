import { TouchableOpacity } from 'react-native';
import { Text } from './Text.native.jsx';

export function Button({ className = '', children, onPress, ...props }) {
  return (
    <TouchableOpacity className={className} onPress={onPress} {...props}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

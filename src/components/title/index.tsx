import {Text, TextStyle} from 'react-native';
import {styles} from './styles';

export default function Title({
  text,
  style,
}: {
  text: string;
  style?: TextStyle;
}) {
  return <Text style={[styles.title, style]}>{text}</Text>;
}

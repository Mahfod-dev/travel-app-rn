import {View, Text, Image} from 'react-native';
import {styles} from './styles';

type AttractionCardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

export default function AttractionCard({
  imageSrc,
  title,
  subtitle,
}: AttractionCardProps) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

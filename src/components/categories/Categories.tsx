import {FlatList, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface CategoriesProps {
  categories: string[];
  selectedCategorie: string;
  onCategoryPress: (item: string) => void;
}

export default function Categories({
  categories,
  selectedCategorie,
  onCategoryPress,
}: CategoriesProps) {
  return (
    <FlatList
      horizontal
      style={{marginRight: -32}}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item, index}) => {
        const selected = selectedCategorie === item;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text
              key={index}
              style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

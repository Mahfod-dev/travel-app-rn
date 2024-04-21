import {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import Title from '../../components/title';
import {styles} from './styles';
import Categories from '../../components/categories/Categories';
import AttractionCard from '../../components/attractionCard/AttractionCard';
import jsonData from '../../data/attraction.json';
import {AttractionDBResponse} from '../../interface/attraction';

const categories = [
  'All',
  'Popular',
  'Historical',
  'Most Visited',
  'Trending',
  'Recommended',
];

export default function HomeScreen() {
  const [selectedCategorie, setSelectedCategorie] = useState('All');
  const [attractions, setAttractions] = useState<AttractionDBResponse[]>([]);

  useEffect(() => {
    setAttractions(jsonData);
  }, []);

  return (
    <View style={styles.container}>
      <Title text="Where do" style={{fontWeight: 'normal'}} />
      <Title text="you want to go" />

      <Title text="Explore Attractions" style={styles.subtitle} />

      <Categories
        categories={categories}
        selectedCategorie={selectedCategorie}
        onCategoryPress={setSelectedCategorie}
      />
      <ScrollView style={styles.row}>
        {attractions
          .filter(attraction => {
            if (selectedCategorie === 'All') {
              return true;
            }
            return attraction.categories.includes(selectedCategorie);
          })
          .map(attraction => (
            <AttractionCard
              key={attraction.id}
              title={attraction.name}
              subtitle={attraction.city}
              imageSrc={attraction.images[0]}
            />
          ))}

        {/* <AttractionCard
          title="Explore parc atractions"
          subtitle="Rome"
          imageSrc="https://images.unsplash.com/photo-1559402900-f5e7feea8679?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXR0cmFjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        />
        <AttractionCard
          title="Explore parc atractions"
          subtitle="Monaco"
          imageSrc="https://images.unsplash.com/photo-1559402900-f5e7feea8679?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXR0cmFjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        /> */}
      </ScrollView>
    </View>
  );
}

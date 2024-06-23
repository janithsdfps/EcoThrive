import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from '../theme/Theme';


type Plant = {
  name: string;
  imageUrl: string | null;
};

const SugResultScreen = ({ route }: any) => {
  const { plantNames } = route.params;
  const [images, setImages] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const apiKey = '44499894-c04052d59b392e8e72d6aa7b0'; 
      const imageResults: Plant[] = [];

      for (const plant of plantNames) {
        try {
          const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(plant)}&image_type=photo`);
          if (response.data.hits.length > 0) {
            imageResults.push({
              name: plant,
              imageUrl: response.data.hits[0].previewURL,
            });
          } else {
            imageResults.push({
              name: plant,
              imageUrl: null,
            });
          }
        } catch (error) {
          console.error(`Error fetching image for ${plant}:`, error);
        }
      }

      setImages(imageResults);
      setLoading(false);
    };

    fetchImages();
  }, [plantNames]);

  return (
    <View style={styles.container}>
        <View style={styles.topbar}>
            <View style={styles.iconcontainer}>
                <Icon name="chevron-circle-left" size={25} color='white' />
                <Text style={styles.screenHeader}>Suggestion</Text>
                <View style={styles.profilecontainer}></View>
            </View>
        </View>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={images}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Text style={styles.text}>{item.name}</Text>
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            ) : (
              <Text style={styles.text}>Image not found</Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  topbar:{
    width:'100%',
    height:'15%',
    backgroundColor:COLORS.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignContent:'center',
    top:0
},
iconcontainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    margin:20
},
screenHeader:{
    color:'white',
    fontSize:24,
},
profilecontainer:{
    width:35,
    height:35,
    borderRadius:18,
    backgroundColor:'white'
},
});

export default SugResultScreen;

import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Card, Text, Button} from 'react-native-paper';

const Product_Detail = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/2';

  useEffect(() => {
    //Alert.alert(filePath);
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData([d]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <Text style={styles.detail}>Product Detail</Text>
            <Card.Cover
              style={{borderRadius: 20}}
              source={{uri: item.thumbnail}}
            />
            <Card.Content>
              <Text style={{color: 'black', fontSize: 25}}>
                Title: {item.title}
              </Text>
            </Card.Content>
            <Card.Content>
              <Text style={styles.infor}>Description: {item.description}</Text>
              <Text style={styles.infor}>Price: ${item.price}</Text>
              <Text style={styles.infor}>
                Discount: {item.discountPercentage}%
              </Text>
              <Text style={styles.infor}>Rating: {item.rating} stars</Text>
              <Text style={styles.infor}>Stock: {item.stock} units</Text>
              <Text style={styles.infor}>Brand: {item.brand}</Text>
              <Text style={styles.infor}>Category: {item.category}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => console.log('Pressed')}>Delete</Button>
              <Button onPress={() => console.log('Pressed')}>Cancel</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#747274',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  search: {
    marginBottom: 10,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  detail: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 10,
  },
  card: {
    marginBottom: 10,
  },
  infor: {
    color: 'black',
  },
  btn: {
    backgroundColor: '#674FA3',
    borderRadius: 50,
  },
});

export default Product_Detail;

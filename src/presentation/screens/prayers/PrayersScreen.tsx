import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const PrayersScreen = () => {
  type pray = {
    name: string;
    imgUrl: string;
  };

  const prays: pray[] = [
    {
      name: 'Virgen de Itatí',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXJFNRfUalYkXybN9nBKC96_mKYB2IEg8RQ&s',
    },
    {
      name: 'Virgen de Itatí',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXJFNRfUalYkXybN9nBKC96_mKYB2IEg8RQ&s',
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/biblia.jpg')}
        style={styles.img}
      />
      <Text style={styles.title}>ORACIONES</Text>
      <FlatList
        data={prays}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.innerCard}>
              <Image source={{uri: item.imgUrl}} style={styles.logo} />
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={styles.subtitle}>Oración</Text>
                <Text style={styles.name}>{item.name.toLocaleUpperCase()}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default PrayersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategrey',
  },
  card: {
    backgroundColor: 'orange',
    height: 130,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  innerCard: {
    backgroundColor: 'white',
    height: 130,
    borderRadius: 10,
    position: 'relative',
    top: -5,
    left: 5,
    padding: 0,
    flexDirection: 'row',
  },
  img: {
    width: '100%',
    height: 250,
    backgroundColor: 'gray',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    width: 90,
    height: 140,
    marginTop: -10,
    marginLeft: 10,
  },
  title: {
    position: 'absolute',
    top: 210,
    left: 120,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'lightcoral',
  },
  subtitle: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 40,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    marginTop: 24,
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ColorValue,
} from 'react-native';

export const Circle = ({color = 'lightgray'}: {color?: ColorValue}) => {
  return (
    <View
      style={{
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: color,
      }}
    />
  );
};

export const ChipButton = ({text}: {text: string}) => {
  return (
    <TouchableOpacity
      style={{
        width: 110,
        height: 'auto',
        padding: 5,
        marginTop: 10,
        borderRadius: 90,
        backgroundColor: 'blue',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const DividerWithText = ({text}: {text: string}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 50,
        marginHorizontal: 20,
      }}>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: 'gray',
          flexDirection: 'row',
        }}
      />
      <Text
        style={{
          marginHorizontal: 15,
          textAlign: 'center',
          color: 'gray',
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: 'gray',
        }}
      />
    </View>
  );
};

export const ElevatedButton = ({text}: {text: string}) => {
  return (
    <TouchableOpacity
      style={{
        width: 110,
        height: 120,
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 1,
        shadowRadius: 8,
      }}>
      <Circle />
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}></View>
      <Text style={styles.title}>Corrientes Católica.org</Text>
      <View style={styles.card}>
        <Circle />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Visita nuestro SITIO WEB!</Text>
          <Text style={styles.cardText}>
            Navegá u enterate sobre noticias locales, nacionales e
            internacional.
          </Text>
          <ChipButton text={'Ver Sitio >'} />
        </View>
      </View>

      <View style={styles.actions}>
        <ElevatedButton text={'Oraciones'} />
        <ElevatedButton text={'Evangelio'} />
      </View>
      <DividerWithText text={'VISITA NUESTRAS REDES SOCIALES'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 180,
    backgroundColor: 'gray',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'pink',
  },
  card: {
    width: '90%',
    height: 150,
    backgroundColor: '',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 8,
    padding: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardText: {
    fontSize: 16,
    color: 'white',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

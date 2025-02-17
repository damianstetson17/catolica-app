import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DividerWithText} from '../../components/ui/Divider/DividerWithText';
import {ElevatedButton} from '../../components/ui/ElevatedButton/ElevatedButton';
import {ChipButton} from '../../components/ui/ChipButton/ChipButton';
import {Circle} from '../../components/ui/Circle/Circle';

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
    backgroundColor: 'lightblue',
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

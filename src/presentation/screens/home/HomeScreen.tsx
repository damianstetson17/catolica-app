import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {DividerWithText} from '../../components/ui/Divider/DividerWithText';
import {ElevatedButton} from '../../components/ui/ElevatedButton/ElevatedButton';
import {ChipButton} from '../../components/ui/ChipButton/ChipButton';
import {Circle} from '../../components/ui/Circle/Circle';
import {Image} from 'react-native';
import {Logo} from '../../components/ui/Logo/Logo';
import SocialMedias from '../../components/SocialMedias/SocialMedias';
import {useNavigation} from '@react-navigation/native';
import {RootTabNavigationProp} from '../../navigator/types';
export const HomeScreen = () => {
  const navigation = useNavigation<RootTabNavigationProp>();

  const urls = {
    virgen: require('../../assets/images/virgen.jpg'),
    oraciones:
      'https://png.pngtree.com/png-clipart/20190520/original/pngtree-hand-painted-cartoon-prayer-hand-elements-png-image_4118593.jpg',
    evangelio:
      'https://media.istockphoto.com/id/901429470/es/vector/biblia-dise%C3%B1o-plano.jpg?s=612x612&w=0&k=20&c=CqfH6bkpnetNWuo7pgR8Ta29blDJCAQIo2va5-khLqU=',
  };

  const goGospel = () => navigation.navigate('US', {screen: 'GOSPEL'});
  const goToWeb = async () =>
    await Linking.openURL('https://corrientescatolica.org/');

  return (
    <View style={styles.container}>
      <Image source={urls.virgen} style={styles.img} />
      <Logo />
      <View style={styles.card}>
        <Circle />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Visita nuestro SITIO WEB!</Text>
          <Text style={styles.cardText}>
            Navegá u enterate sobre noticias locales, nacionales e
            internacional.
          </Text>
          <ChipButton text={'Ver Sitio >'} onPress={goToWeb} />
        </View>
      </View>

      <View style={styles.actions}>
        <ElevatedButton
          text={'Oraciones'}
          uriSrc={urls.oraciones}
          onPress={goToWeb}
        />
        <ElevatedButton
          text={'Evangelio'}
          uriSrc={urls.evangelio}
          onPress={goGospel}
        />
      </View>
      <DividerWithText
        text={'VISITA NUESTRAS REDES SOCIALES'}
        styles={{
          position: 'absolute',
          bottom: 50,
        }}
      />
      <SocialMedias />
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
    height: 200,
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
  logo: {
    width: 300,
    height: 60,
    marginVertical: 20,
  },
});

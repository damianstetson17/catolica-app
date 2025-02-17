import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../components/ui/Logo/Logo';
import {Divider} from '../../components/ui/Divider/Divider';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Logo
        styles={{
          width: 380,
          height: 90,
        }}
      />
      <Text style={styles.about}>
        Corrientes Católica, es un portal al servicio de la información católica
        acompañando los desafíos de la Humanidad y la misión de la Iglesia.
        {'\n\n'}
        Realizamos tareas como ser transmisores en las distintas festividades
        locales, nacionales e internacionales. También creamos contenigo
        digital, marketing, videoconferencias y mucho más a través de las redes
        sociales.
      </Text>

      <View style={{position: 'relative', top: 10}}>
        <Divider
          styles={{
            marginHorizontal: 120,
            marginVertical: 20,
          }}
        />
        <Text style={styles.info}>
          Agradecemos el servicio del evangelio a www.evangeliodeldia.org
        </Text>
      </View>
      <Text style={styles.rights}>
        {new Date().getFullYear()} © Corrientes Católica
      </Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  rights: {
    color: 'gray',
    fontSize: 12,
  },
  info: {
    color: 'cornflowerblue',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  about: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DividerWithText} from '../../components/ui/Divider/DividerWithText';
import {Divider} from '../../components/ui/Divider/Divider';
import {FlatList} from 'react-native';
import ContanctItem from '../../components/contact/ContanctItem';

const ContactScreen = () => {
  const contactData = [
    {
      icon: 'my-location',
      title: 'Ubicación',
      description: 'Corrientes - Argentina',
    },
    {icon: 'email', title: 'Correo', description: 'catolica@gmail.com'},
    {icon: 'phone', title: 'Teléfono', description: '+54 9 3764 347698'},
  ];

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.title}>INFORMACIÓN</Text>
      <DividerWithText text={'CONTÁCTENOS'} styles={styles.topDivider} />
      <View style={styles.container}>
        <FlatList
          data={contactData}
          renderItem={({item}) => (
            <ContanctItem
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          )}
        />
      </View>
      <Divider styles={styles.bottomDivider} />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  topDivider: {position: 'absolute', top: 150},
  container: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    marginLeft: 20,
    position: 'absolute',
    top: 250,
  },
  bottomDivider: {position: 'absolute', bottom: 150},
  title: {
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    top: 50,
  },
});

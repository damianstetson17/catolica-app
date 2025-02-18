import {FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {socialMedias} from './AvailableMedias';

const SocialMedias = () => {
  return (
    <FlatList
      data={socialMedias}
      horizontal
      renderItem={({item}) => (
        <TouchableOpacity onPress={item.onPress} style={styles.item}>
          <Image source={item.icon} style={styles.img} />
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.flatStyle}
    />
  );
};

export default SocialMedias;

const styles = StyleSheet.create({
  flatStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginTop: 90,
  },
  item: {
    padding: 15,
  },
  img: {height: 50, width: 50},
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ContanctItemProps {
  icon: string;
  title: string;
  description: string;
}

const ContanctItem = ({icon, title, description}: ContanctItemProps) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={25} style={styles.icon} />
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default ContanctItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  row: {
    marginVertical: 10,
    marginLeft: 20,
  },
  icon: {
    marginRight: 10,
    color: 'gray',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  description: {
    fontSize: 15,
    color: 'gray',
  },
});

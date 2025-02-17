import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Circle} from '../Circle/Circle';
import {Image} from 'react-native';

interface ElevatedButtonProps {
  text: string;
  onPress?: () => void;
  uriSrc?: string;
}

export const ElevatedButton = ({text, onPress, uriSrc}: ElevatedButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={innerStyles.container}>
      <Image
        source={{
          uri: uriSrc,
        }}
        style={{
          width: 90,
          height: 90,
          borderRadius: 90,
        }}
      />
      <Text style={innerStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const innerStyles = StyleSheet.create({
  container: {
    width: 110,
    height: 130,
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
  },
  text: {
    color: 'black',
    fontSize: 15,
    marginVertical: 5,
    fontWeight: 'bold',
  },
});

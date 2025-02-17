import {Image} from 'react-native';

export const Circle = () => {
  return (
    <Image
      source={require('../../../assets/images/mini_logo.png')}
      style={{
        width: 90,
        height: 90,
        borderRadius: 90,
      }}
    />
  );
};

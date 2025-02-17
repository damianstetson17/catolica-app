import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';

export const Logo = ({styles}: {styles?: StyleProp<ImageStyle>}) => (
  <Image
    source={require('../../../assets/images/logo.png')}
    style={[innerStyles.logo, styles]}
  />
);

const innerStyles = StyleSheet.create({
  logo: {
    width: 300,
    height: 60,
    marginVertical: 20,
  },
});

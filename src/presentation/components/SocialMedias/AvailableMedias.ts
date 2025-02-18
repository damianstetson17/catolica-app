import {ImageSourcePropType} from 'react-native';

type SocialMedia = {
  name: string;
  icon: ImageSourcePropType;
  onPress: () => void;
};

export const socialMedias: SocialMedia[] = [
  {
    name: 'facebook',
    icon: require('../../assets/images/facebook.png'),
    onPress: () => {},
  },
  {
    name: 'instagram',
    icon: require('../../assets/images/instagram.png'),
    onPress: () => {},
  },
  {
    name: 'twitter',
    icon: require('../../assets/images/twitter.png'),
    onPress: () => {},
  },
  {
    name: 'youtube',
    icon: require('../../assets/images/youtube.png'),
    onPress: () => {},
  },
];

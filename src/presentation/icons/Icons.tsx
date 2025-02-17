import Icon from 'react-native-vector-icons/MaterialIcons';

export const HomeIcon = ({color = '#000'}: {color?: string}) => (
  <Icon name="home" size={30} color={color} />
);

export const PersonIcon = ({color = '#000'}: {color?: string}) => (
    <Icon name="person" size={30} color={color} />
  );

  export const IDIcon = ({color = '#000'}: {color?: string}) => (
    <Icon name="share" size={27} color={color} />
  );
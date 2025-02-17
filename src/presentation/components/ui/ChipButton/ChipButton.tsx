import { TouchableOpacity, Text } from "react-native";

export const ChipButton = ({
  text,
  onPress = () => {},
}: {
  text: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 110,
        height: 'auto',
        padding: 5,
        marginTop: 10,
        borderRadius: 90,
        backgroundColor: 'blue',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

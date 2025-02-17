import { TouchableOpacity, Text } from "react-native";
import { Circle } from "../Circle/Circle";

export const ElevatedButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 110,
        height: 120,
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
      }}>
      <Circle />
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

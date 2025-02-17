import { View } from "react-native";
import { Text } from "react-native-gesture-handler";

export const DividerWithText = ({text}: {text: string}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 50,
        marginHorizontal: 20,
      }}>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: 'gray',
          flexDirection: 'row',
        }}
      />
      <Text
        style={{
          marginHorizontal: 15,
          textAlign: 'center',
          color: 'gray',
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: 'gray',
        }}
      />
    </View>
  );
};
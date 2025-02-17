import { ColorValue, View } from "react-native";

export const Circle = ({color = 'lightgray'}: {color?: ColorValue}) => {
  return (
    <View
      style={{
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: color,
      }}
    />
  );
};

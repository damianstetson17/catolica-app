import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "react-native";

interface DividerWithTextProps {
  text: string;
  styles?: StyleProp<ViewStyle>;
}

export const DividerWithText = ({text, styles}: DividerWithTextProps) => {
  return (
    <View
      style={[innerStyles.container, styles]}>
      <View
        style={innerStyles.innerLine}
      />
      <Text
        style={innerStyles.text}>
        {text}
      </Text>
      <View
       style={innerStyles.innerLine}
      />
    </View>
  );
};

const innerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 50,
    marginHorizontal: 20,
  },
  innerLine : {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
  text: {
    marginHorizontal: 15,
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
  },
});
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface DividerWithTextProps {
  styles?: StyleProp<ViewStyle>;
}

export const Divider = ({styles}: DividerWithTextProps) => {
  return (
    <View style={[innerStyles.container, styles]}>
      <View style={innerStyles.innerLine} />
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
  innerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
});

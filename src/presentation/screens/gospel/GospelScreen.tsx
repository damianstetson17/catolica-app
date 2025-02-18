import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import React from 'react';

const GospelScreen = () => {
  return (
    <WebView source={{uri: 'https://www.evangeliodeldia.org/'}} style={{flex: 1}} />
  );
};

export default GospelScreen;

const styles = StyleSheet.create({});

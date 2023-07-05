// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container} testID="container">
      <Text>Hello World</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

// Color pallette
// error  Color literal: { backgroundColor: '#fff' }  react-native/no-color-literals
const WHITE_COLOR = "#fff";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: WHITE_COLOR,
    flex: 1,
    justifyContent: "center",
  },
});

module.exports = App;

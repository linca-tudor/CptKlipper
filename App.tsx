import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';
import {Sizing, Typography, Outlines, Colors, Buttons} from './styles';

const App = () => {
  return (
    <>
      <SafeAreaView style={Sizing.flex}>
        <View style={style.container}>
          <View style={style.headerContainer}>
            <Text style={style.headerText}>Captain Klipper</Text>
            <Text style={style.subheaderText}>
              Kick-start your 3D Printing workflow with simple, organized
              interface.
            </Text>
          </View>
          <View style={style.bodyContainer}></View>
          <Pressable
            style={Buttons.applyOpacity(style.button)}
            onPress={() => {
              console.log('Button has been pressed');
            }}>
            <Text style={style.buttonText}>Buttons are Useful</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    ...Sizing.flex,
    padding: Sizing.x10,
    backgroundColor: Colors.neutral.s500,
  },
  headerContainer: {
    marginBottom: Sizing.x20,
    paddingBottom: Sizing.x20,
    borderBottomWidth: Outlines.borderWidth.hairline,
    borderColor: Colors.neutral.s200,
  },
  headerText: {
    ...Typography.bold.x40,
    marginBottom: Sizing.x10,
    color: Colors.neutral.s100,
  },
  subheaderText: {
    ...Typography.semibold.x30,
    color: Colors.neutral.s200,
  },
  bodyContainer: {
    ...Sizing.flex,
    marginBottom: Sizing.x20,
  },
  bodyText: {
    ...Typography.regular.x20,
    marginBottom: Sizing.x20,
  },
  button: {
    ...Buttons.bar.primary,
    marginBottom: Sizing.x10,
  },
  buttonText: {
    ...Buttons.barText.primary,
  },
  secondaryButton: {
    ...Buttons.bar.secondary,
  },
  secondaryButtonText: {
    ...Buttons.barText.secondary,
  },
});

export default App;

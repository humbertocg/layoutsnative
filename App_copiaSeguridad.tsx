import React, {type PropsWithChildren} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box1: {
    padding: 20,
    backgroundColor: 'red',
  },
  box2: {
    padding: 20,
    backgroundColor: 'green',
  },
  box3: {
    padding: 20,
    backgroundColor: 'yellow',
  },
  box4: {
    padding: 20,
    backgroundColor: 'gray',
  },
});

export default App;


import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';


export default function App() {
  const onPress = () => {
    alert('Coucou');
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Coucou Minouche ❤️</Text>
      <Pressable onPress={onPress()}>
        <Text>Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

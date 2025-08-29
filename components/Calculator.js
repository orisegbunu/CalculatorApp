import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Calculator() {
  return (
    <View style={styles.container}>
      <Text>Calculator will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

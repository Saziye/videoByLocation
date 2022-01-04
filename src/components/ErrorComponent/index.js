import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ErrorComponent({error}) {
  return (
    <View style={styles.container}>
      <Text>{error.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

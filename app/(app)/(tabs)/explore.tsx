import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default  () => {
  return (
    <View style={styles.container}>
      <ThemedText>Explore</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }})
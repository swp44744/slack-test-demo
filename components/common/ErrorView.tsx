import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ThemedText } from '../ThemedText';

interface Props {
  message?: string;
  style?: StyleProp<ViewStyle>;
}

export const ErrorView: React.FC<Props> = ({ message = 'Something went wrong. Please try again.', style }) => {
  return (
    <View style={[styles.container, style]}>
      <ThemedText style={styles.text}>{message}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

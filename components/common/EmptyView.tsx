import React from 'react';
import { View, StyleSheet, Text, ViewStyle, StyleProp } from 'react-native';

type MessageType = 'info' | 'error' | 'warn';

interface Props {
  message?: string;
  type?: MessageType;
  style?: StyleProp<ViewStyle>;
}

export const EmptyView: React.FC<Props> = ({
  message = 'Nothing to show.',
  type = 'info',
  style,
}) => {
  const color = {
    info: '#000000',
    error: '#D32F2F',
    warn: '#FFA000',
  }[type];

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, { color }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
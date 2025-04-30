import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder || 'Search...'}
        placeholderTextColor="#888"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 14,
    padding: 10,
    fontSize: 16,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    shadowColor: '#000',
  },
});

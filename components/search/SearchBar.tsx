import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface SearchBarProps {
    value: string;
    onChange: (text: string) => void;
    placeholder?: string;
}

// Custom SearchBar component
// This component is a styled TextInput that allows users to search for items.
// It accepts a value, an onChange function to handle input changes, and an optional placeholder text.
// The input is sanitized to allow only letters, numbers, and spaces.
export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
    const handleChange = (text: string) => {
        // Allow only letters, numbers, and spaces
        const sanitized = text.replace(/[^a-zA-Z0-9 ]/g, '');
        onChange(sanitized);
    };
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={handleChange}
                placeholder={placeholder || 'Search...'}
                placeholderTextColor="#888"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 12,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 1,
    },
});

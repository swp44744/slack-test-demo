import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDebounce } from 'use-debounce';
import { SearchBar } from '@/components/search/SearchBar';
import { ListUsers } from '@/components/search/ListUsers';
import { useUsersQuery } from '@/hooks/useUsersQuery';
import { ThemedText } from '@/components/ThemedText';

export default function SearchUsersScreen() {
  const [input, setInput] = useState('');
  const [debouncedSearchTerm] = useDebounce(input, 800);

  const { data: users = [], isLoading, error } = useUsersQuery(debouncedSearchTerm);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <SearchBar value={input} onChange={setInput} placeholder="Search users..." />

      <View style={styles.content}>
        {isLoading && <ActivityIndicator size="large" color="gray" style={styles.loader} />}
        {error && <ThemedText style={styles.errorText}>Error fetching users. Please try again.</ThemedText>}
        {!isLoading && !error && <ListUsers users={users} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 12 },
  loader: { marginTop: 20 },
  errorText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});

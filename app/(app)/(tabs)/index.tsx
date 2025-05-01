import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDebounce } from 'use-debounce';
import { SearchBar } from '@/components/search/SearchBar';
import { ListUsers } from '@/components/search/ListUsers';
import { useUsersQuery } from '@/hooks/useUsersQuery';
import { LoadingView } from '@/components/common/LoadingView';
import { EmptyView } from '@/components/common/EmptyView';

const strings = {
  searchPlaceHolder: 'Search users..',
  errorMessage: 'Something went wrong.',
};
export default function SearchUsersScreen() {
  const [input, setInput] = useState('');
  const [debouncedSearchTerm] = useDebounce(input, 800);
  const { data: users = [], isLoading, error } = useUsersQuery(debouncedSearchTerm);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={input} onChange={setInput} placeholder={strings.searchPlaceHolder} />
      <View style={styles.content}>
        {isLoading && <LoadingView />}
        {error && <EmptyView message={strings.errorMessage} type='error' />}
        {!isLoading && !error && <ListUsers users={users} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

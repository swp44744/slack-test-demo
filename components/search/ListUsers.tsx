import React from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { User } from '@/types/user';
import { ThemedText } from '../ThemedText';

interface Props {
  users: User[];
}

export const ListUsers: React.FC<Props> = ({ users }) => {
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
          <View>
            <ThemedText style={styles.name}>{item.display_name}</ThemedText>
            <ThemedText style={styles.username}>@{item.username}</ThemedText>
          </View>
        </View>
      )}
      ListEmptyComponent={
        <View style={styles.empty}>
          <ThemedText>No users found.</ThemedText>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    color: '#555',
  },
  empty: {
    padding: 20,
    alignItems: 'center',
  },
});

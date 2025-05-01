import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { User } from '@/types/user';
import { EmptyView } from '../common/EmptyView';

interface Props {
  users: User[];
}
// ListUsers component to display a list of users
// It takes an array of users as a prop and renders them in a FlatList
export const ListUsers: React.FC<Props> = ({ users }) => {
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{item.display_name}</Text>
            <Text style={styles.username}>@{item.username}</Text>
          </View>
        </View>
      )}
      ListEmptyComponent={<EmptyView message="No users found." type='info' />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    color: '#555',
  },
});

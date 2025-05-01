import React from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { User } from '@/types/user';
import { ThemedText } from '../ThemedText';
import { ErrorView } from '../common/ErrorView';

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
                    <View style={styles.nameContainer}>
                        <ThemedText style={styles.name}>{item.display_name}</ThemedText>
                        <ThemedText style={styles.username}>@{item.username}</ThemedText>
                    </View>
                </View>
            )}
            ListEmptyComponent={<ErrorView message='No users found.' />}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 4,
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
        width: 38,
        height:38,
        borderRadius: 4,
        marginRight: 12,
    },
    nameContainer: {
      flexDirection: 'row',
      gap: 8,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#1D1C1D',
        lineHeight: 28,
    },
    username: {
        color: '#616061',
        fontSize: 16,
        lineHeight: 28,
    },
    empty: {
        padding: 20,
        alignItems: 'center',
    },
});

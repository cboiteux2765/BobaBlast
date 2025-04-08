import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const HomeScreen = () => {
    const tailwind = useTailwind();

    const bobaStores = [
        { id: '1', name: 'Boba Bliss' },
        { id: '2', name: 'Tea Time' },
        { id: '3', name: 'Bubbleology' },
    ];

    const renderStoreItem = ({ item }) => (
        <View style={tailwind('p-4 border-b border-gray-200')}>
            <Text style={tailwind('text-lg font-semibold')}>{item.name}</Text>
        </View>
    );

    return (
        <View style={tailwind('flex-1 bg-white')}>
            <Text style={tailwind('text-2xl font-bold p-4')}>Find Your Favorite Boba!</Text>
            <FlatList
                data={bobaStores}
                renderItem={renderStoreItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default HomeScreen;
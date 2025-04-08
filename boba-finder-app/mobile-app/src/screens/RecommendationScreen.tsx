import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { fetchRecommendations } from '../utils/api';
import { useTailwind } from 'tailwind-rn';

const RecommendationScreen = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const tailwind = useTailwind();

    useEffect(() => {
        const getRecommendations = async () => {
            try {
                const data = await fetchRecommendations();
                setRecommendations(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getRecommendations();
    }, []);

    if (loading) {
        return (
            <View style={tailwind('flex-1 justify-center items-center')}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={tailwind('flex-1 p-4')}>
            <Text style={tailwind('text-xl font-bold mb-4')}>Boba Drink Recommendations</Text>
            <FlatList
                data={recommendations}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={tailwind('mb-4 p-4 border rounded')}>
                        <Text style={tailwind('text-lg font-semibold')}>{item.name}</Text>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default RecommendationScreen;
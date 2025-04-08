import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BlogScreen from '../screens/BlogScreen';
import RecommendationScreen from '../screens/RecommendationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Blog" component={BlogScreen} />
                <Stack.Screen name="Recommendations" component={RecommendationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
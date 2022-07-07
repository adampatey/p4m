import React from 'react';
import {StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import GenresScreen from '../screens/Genres';

export default function GenresNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.GenresNavigator}>
            <Stack.Screen name='Genres' component={GenresScreen} options={{ title: 'GenresScreen' }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    GenresNavigator: {

    },
});
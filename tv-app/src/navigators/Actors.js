import React from 'react';
import {StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import ActorsScreen from '../screens/Actors';

export default function ActorsNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.ActorsNavigator}>
            <Stack.Screen name='Actors' component={ActorsScreen} options={{ title: 'ActorsScreen' }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    ActorsNavigator: {

    },
});
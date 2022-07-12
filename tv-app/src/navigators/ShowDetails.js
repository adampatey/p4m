import React from 'react';
import {StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import ShowDetailsScreen from '../screens/ShowDetails';

export default function ActorsNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.ActorsNavigator}>
            <Stack.Screen name='ShowDetails' component={ShowDetailsScreen} options={{ title: 'ShowDetails' }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    ShowDetailsNavigator: {

    },
});
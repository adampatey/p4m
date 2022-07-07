import React from 'react';
import {StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import ShowsScreen from '../screens/Shows';
import ShowDetailsScreen from '../screens/ShowDetails';

export default function ShowsNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.ShowsNavigator}>
            <Stack.Screen name='Shows' component={ShowsScreen} options={{ title: 'ShowsScreen' }} />
            <Stack.Screen name="Show Details" component={ShowDetailsScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    ShowsNavigator: {

    },
});
import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Shows from '../screens/Shows';
import ShowDetails from '../screens/ShowDetails';
import { NavigationContainer } from '@react-navigation/native';

export default function ShowsNavigator() {
    const Stack = createStackNavigator();

    // return (
    //     <Tab.Navigator style={styles.ShowsNavigator}>
    //         <Tab.Screen name='Shows' component={Shows} options={{ title: 'Shows' }} />
    //         <Tab.Screen name="ShowDetails" component={ShowDetails} />
    //     </Tab.Navigator>
    // );

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <StackScreen
                    name='Shows'
                    component={Shows}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='ShowDetails' component={ShowDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    ShowsNavigator: {

    },
});
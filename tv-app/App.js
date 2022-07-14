import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/Home';
import ShowsScreen from './src/screens/Shows';
import GenresScreen from './src/screens/Genres';
import ActorsScreen from './src/screens/Actors';
import ShowDetailsScreen from './src/screens/ShowDetails';

import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShowsNavigator from './src/navigators/Shows';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer styles={styles.container}>
      {/* <ShowsNavigator name="ShowsNavigator" component={ShowsNavigator }
      /> */}
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen} options={{ title: 'ShowSpace' }} />
        <Drawer.Screen name='Shows' component={ShowsScreen} options={{ title: 'Shows' }} />
        <Drawer.Screen name='Genres' component={GenresScreen} options={{ title: 'Genres' }} />
        <Drawer.Screen name='Actors' component={ActorsScreen} options={{ title: 'Actors' }} />
        <Drawer.Screen name='ShowDetails' component={ShowDetailsScreen} options={{ title: 'ShowDetails' }} />
      </Drawer.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.HomeScreen}>
            <TouchableOpacity onPress={() => navigation.navigate('Shows')}>
                <Text>Browse Shows</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Genres')}>
                <Text>Browse Genres</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Actors')}>
                <Text>Browse Actors</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    HomeScreen: {
        padding:20
    },
});
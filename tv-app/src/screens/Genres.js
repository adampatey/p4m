import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { global } from '../config/global';

export default function GenresScreen({ navigation }) {

    const  [searchQuery, setSearchQuery] = useState('Comedy');

    const [genres, setGenres] = useState();

    const searchGenres = () => {
        // tv maze api for genres!
    }

    useEffect(() => {
        searchGenres();
    }, [searchQuery]);

    return (
        <View style={styles.GenresScreen}>
            <Text>Genres screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    GenresScreen: {

    },
});
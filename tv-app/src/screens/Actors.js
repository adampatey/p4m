import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import { global } from '../config/global';

import SearchForm from '../components/SearchForm';

export default function ActorsScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('people');
    const [shows, setActors] = useState();

    const searchActors = () => {

        console.log("Make a call to the API using the search query: " + searchQuery);

        fetch('http://api.tvmaze.com/' + searchQuery)


            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setActors(json);
            })
            .catch((error) => {
                console.error(error);
            });
    }


    useEffect(() => {
        searchActors();
    }, [searchQuery]);



    return (
        <View style={styles.ActorsScreen}>
            {shows ? (
                <View style={styles.resultsContainer} >
                    <FlatList
                        data={shows}
                        renderItem={({ item }) => (
                            <Image
                                style={styles.resultImage}
                                source={ item.image ? { uri: item.image.medium } : require('../../assets/icon.png')}
                            />
                        )}
                        numColumns="2"
                        style={{ margin: 10 }}
                    />
                </View>
            ) : (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#000" />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    ActorsScreen: {

    },
    loadingContainer: {
        height: '100%',
        justifyContent: 'center'
    },
    resultImage: {
        flex: 1,
        height: 200
    },
    resultImageTouchable: {
        flex: 1,
        margin: 10,
        height: 200
    }
});

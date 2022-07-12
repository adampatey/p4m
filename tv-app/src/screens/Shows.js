import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import { global } from '../config/global';

import SearchForm from '../components/SearchForm';
import ShowsNavigator from '../navigators/Shows';

export default function ShowsScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('shows');
    const [shows, setShows] = useState();

    const searchShows = () => {

        console.log("Make a call to the API using the search query: " + searchQuery);

        fetch('http://api.tvmaze.com/' + searchQuery)


            // ('https://api.unsplash.com/search/photos?client_id='+global.unsplashAccessKey+'&query='+searchQuery)
            // 'http://api.tvmaze.com/search/shows?q=' + searchQuery + global.tvMazeAcessKey)
            // fetch('https://api.unsplash.com/search/photos?client_id=57dQ8K_i_KP1ZB6wVnlt97q0n75VNZP8JYUJM0Y3oCE&query='+searchQuery)
            //    fetch('https://api.tvmaze.com/search/shows?q=community')

            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setShows(json);
            })
            .catch((error) => {
                console.error(error);
            });
    }


    useEffect(() => {
        searchShows();
    }, [searchQuery]);

    // return (
    //     <View style={styles.ShowsScreen}>
    //         <SearchForm setSearchQuery={setSearchQuery} />
    //         {shows ? (
    //             <View style={styles.resultsContainer}>
    //                 <FlatList numColumns="2" style={{ margin: 10, marginBottom: 100 }}
    //                     data={shows}
    //                     renderItem={({ item }) => (
    //                         <image
    //                             style={styles.resultImage}
    //                             source={{uri: item.url.regular}}
    //                         />

    //                         <TouchableOpacity>
    //                             style={styles.resultImageTouchable}
    //                             onPress={() => {
    //                                 navigation.navigate('Show Details', {
    //                                     showId: item.id,
    //                                 });
    //                             }}

    //                             {/* <Image
    //                                 style={styles.resultImage}>
    //                                 source={{ uri: item.image.medium }} //might need to change
    //                             </Image> */}
    //                         </TouchableOpacity>
    //                     )}
    //                 />
    //             </View>
    //         ) : (
    //             <View style={styles.loadingContainer}>
    //                 <ActivityIndicator size="large" color="#000" />
    //             </View>
    //         )}
    //     </View>
    // );

    return (
        <View style={styles.ShowsScreen}>
            {shows ? (
                <View style={styles.resultsContainer} >
                    <FlatList
                        data={shows}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.resultImageTouchable}
                                onPress={() => {
                                    navigation.navigate("ShowsNavigator", { 
                                        screen: 'ShowDetails',
                                        params:  {showId: item.id},
                                    });
                                }}
                            >
                                <Image
                                    style={styles.resultImage}
                                    source={{ uri: item.image.medium }}
                                />
                            </TouchableOpacity>
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
    ShowsScreen: {

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

// client_id='+global.tvMazeAccessKey+
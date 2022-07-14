import React, { useState,  useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageComponent, Linking, Image } from 'react-native';

import ShowsScreen from './Shows';

export default function ShowDetailsScreen({ route, navigation }) {
    const { showId } = route.params;
    const [showData, setShowData] = useState();

    console.log(showId);
 
    const getShowData = () => {
        fetch('https://api.tvmaze.com/search/shows?page=1' + showId ) // change to get the show id endpoint - activity 23
        // fetch('https://api.tvmaze.com/search/shows?q=community') // change to get the show id endpoint - activity 23
            .then((response) => response.json())
            .then((json) => {
                setShowData(json);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        getShowData();
    }, [showId]);

    console.log(showData);

    return (
        <View style={styles.ShowDetailsScreen}>
            {showData ? (
                <View style={styles.detailsContainer}>
                    <Image 
                    style={styles.showImage}
                    source={{uri: showData.image.medium}}
                    />
                    <Text>{showData.summary}</Text>

                </View>
            ): (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large' color='#000' />
                </View>
            )}
        </View>
    );

    // return (
    //     <View style={styles.ShowDetailsScreen}>
    //         {showData ? (
    //             <View style={styles.detailsContainer}>
    //                 <Image
    //                 style={styles.showImage}
    //                 source={{uri:showData.urls.regular}}
    //                 />
    //                 <View style={styles.metaDataContainer}>
    //                     <Text style={styles.metaDataText}><Text style={{fontWeight:'bold'}}>Show Name:</Text>
    //                     {showData.}</Text>
    //                     {/* find location of show name */}
    //                     <Text style={styles.metaDataText}><Text style={{fontWeight:'bold'}}></Text>
    //                     {showData.}</Text>
    //                      {/* find location of show ... */}
    //                     {/* fill in rest - activity 24 */}
    //                     {/* need to add links! all in activity 24 */}
    //                 </View>


    //             </View>
    //         ) : (
    //             <View style={styles.loadingContainer}>
    //                 <ActivityIndicator size="large" color="#000"/>
    //             </View>
    //         )}
    //     </View>
    // );
}

const styles = StyleSheet.create({
    ShowDetailsScreen: {

    },
    loadingContainer: {
        height:'100%',
        justifyContent:'center'
    },
    showImage: {
        width:'100%',
        height:300,
        resizeMode:'cover'
    },
    metaDataContainer: {
        margin:20
    },
    metaDataText:{
        fontSize:17
    },
});
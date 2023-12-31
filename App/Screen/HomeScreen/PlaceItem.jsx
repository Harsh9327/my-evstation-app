import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import GlobalApi from '../../Utils/GlobalApi';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function PlaceItem({ place }) {
    const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1/";
    return (


        <View style={{
            backgroundColor: Colors.WHITE,
            margin: 5,
            borderRadius: 10,
            width: Dimensions.get('screen').width * 0.9
        }}>
            <LinearGradient
            colors={['transparent','#ffffff', '#ffffff']}>
                <Image source={
                    place?.photo ?
                        {
                            uri: PLACE_PHOTO_BASE_URL + place.photos[0]?.name +
                                "/media?key=" + GlobalApi.API_KEY + "&maxHeightPx=800 &maxWidthPx=1200"
                        }
                        : require('./../../../assets/images/EV-logo.png')}
                    style={{ width: '100%', borderRadius: 10, height: 180, zIndex:-1 }}
                />
                <View style={{ padding: 15 }}>
                    <Text style={{
                        fontSize: 23,
                        fontFamily: 'outfit-medium'
                    }}>{place.displayName?.text}</Text>

                    <Text style={{
                        color: Colors.GRAY,
                        fontFamily: 'outfit'
                    }}>{place?.shortFormattedAddress}</Text>

                    <View style={{
                        marginTop: 5
                    }}>
                        <Text style={{
                            fontFamily: 'outfit',
                            color: Colors.GRAY,
                            fontSize: 17
                        }}>Connectors</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                            marginTop: 2
                        }}>{place?.evChargeOptions?.connectorCount}Points</Text>
                    </View>

                    <View style={{padding:12, backgroundColor:Colors.PRIMARY,
                        borderRadius:6, paddingHorizontal:14}}>
                       <FontAwesome name="location-arrow" size={24} color="white" />
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}
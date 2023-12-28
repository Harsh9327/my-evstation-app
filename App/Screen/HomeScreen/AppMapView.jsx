import { View, Text ,StyleSheet} from 'react-native'
import React, { useContext } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import  {UserLocationContext}  from '../../Context/UserLocationContex';
import Markers from './Markers';

export default function AppMapView({placelist}) {
    const {location, setlocation}= useContext(UserLocationContext);

    //return location?.latitude&& ()
  return (
    <View>
      <MapView 
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta:0.0422,
        longitudeDelta:0.0421
      }}         
      >
        {location? <Marker
          coordinate={{
            latitude: location?.latitude,
            longitude: location?.longitude
          }}
        />:null}

        {placelist&&placelist.map((item,index)=>(
          <Markers key={index}
           index={index}
           place={item}/>
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
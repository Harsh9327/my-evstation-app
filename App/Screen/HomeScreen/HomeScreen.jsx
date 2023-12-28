import { View , StyleSheet} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppMapView from './AppMapView';
import Header from './Header';
import SearchBar from './SearchBar';
import { UserLocationContext } from '../../Context/UserLocationContex';
import GlobalApi from '../../Utils/GlobalApi';
import PlaceListView from './PlaceListView';

export default function HomeScreen() {

  const {location , setlocation} = useContext(UserLocationContext);
  const [placeList ,setPlaceList] = useState([]);

  useEffect(()=>{
    location&&GetNearByPlace();
  },[location])

  const GetNearByPlace =()=> {
    const data={
      "includedTypes": ["electric_vehical_charging_station"],
      "maxResultCount": 10,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": location.latitude,
            "longitude": location.longitude
          },
          "radius": 5000.0
        }
    }
  }
    GlobalApi.NearByPlace(data).then(resp=>{
      console.log(JSON.stringify(resp.data));
      setPlaceList(resp.data?.places);
      
    })
  }
  return (
    <View>
       <View style={styles.heardercontainer}>
          <Header/>
          <SearchBar searchedLocation={(location)=>console.log(location)}/>
       </View>
       {placeList&&<AppMapView placeList={placeList}/>}
      <View style={styles.placeListcontainer}>
        {placeList&&<PlaceListView placeList={placeList} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heardercontainer: {
    position:'absolute',
    zIndex:10,
    padding:50,
    width:'100%',
    paddingHorizontal:20,
  },

  placeListcontainer: {
       position: 'absolute',
       bottom:0,
       zIndex:10,
       width:'100%'
  }
})

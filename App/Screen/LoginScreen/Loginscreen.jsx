import React from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity} from 'react-native'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import  useWarmUpBrowser from "./../../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();
export default function Loginscreen() {

    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onpress = async()=>{
        try {
            const { createdSessionId, signIn, signUp, setActive } =
              await startOAuthFlow();
       
            if (createdSessionId) {
              setActive({ session: createdSessionId });
            } else {
              // Use signIn or signUp for next steps such as MFA
            }
          } catch (err) {
            console.error("OAuth error", err);
          }
    }

  return (
     <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
     }}>
        <Image source={require('./../../../assets/images/EV-logo.png')}
          style={styles.logoImage}
        />
        <Image source={require('./../../../assets/images/RRevstation.png')}
          style={styles.bgImage}
        />
        
        <View style={{padding:20}}>
            <Text style={styles.heading}>Your Ultimate EV charging station finder app</Text>
            <Text Style={styles.desc}>find EV charging station near you, plan trip and so much more in just one click</Text>
            <Text>welcome to the loginscreen first create a account </Text>

            <TouchableOpacity style={styles.button}
                onPress={onpress}>
                <Text style={{
                    color:Colors.BLACK,
                    textAlign: 'center',
                    fontFamily: 'outfit',
                    fontSize: 17
                }}>Login With Google</Text>

            </TouchableOpacity>
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
     logoImage: {
        width: 200,
        height: 60,
        objectFit: 'contain'
     },

     bgImage: {
        width: '100%',
        height: 300,
        marginTop: 20,
        objectFit: 'cover'
     },

     heading: {
        fontSize: 25,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
        marginTop: 20
     },
     
     desc: {
        fontSize: 17,
        fontFamily: 'outfit',
        marginTop: 17,
        textAlign: 'center',
        color: '#000',
        Color: Colors.GRAY
     },

     button: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        display: 'flex',
        borderRadius: 99,
        marginTop: 50
     }
})
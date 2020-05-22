import React from 'react';
import {Text,View,StyleSheet} from 'react-native'

const Logo=({change,size})=>{

    return(
        <View style={styles.container}>
            <Text style={{fontFamily:'billabong',fontSize:size,color:`${change}`,fontWeight:'500',letterSpacing:1.5}}>Instagram</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // borderWidth:1,
        justifyContent:"flex-end",
        backgroundColor:'rgba(255,255,255,0)',
        alignItems:'center',
        
    },
    iconText:{
        
    }
})

export default Logo;
import React from 'react';
import {View,Image,Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function More(){

    return(
    <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:10}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center', borderRadius:100, borderWidth:3, padding:2, marginRight:10}}>
                     <Image
                        source={require('../assets/Images/2.jpg')}
                        style={{width:30, height:30,borderRadius:100}}
                        resizeMode="cover"
                    />
                </View>
                <View>
                    <Text style={{fontWeight:'bold'}}>Kwame</Text>
                    <Text style={{fontSize:10}}>Abuja, Nigeria</Text>
                </View>
    </View>
 <View>
    <Ionicons
        name='ios-more'
        size={26}
    />
</View>

</View>
    )
}
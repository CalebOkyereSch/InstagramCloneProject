import React from 'react';
import {View,ScrollView,Text,Image} from 'react-native';

export default function StatusView(){

    return (
        <View style={{flex:1,padding:10,margin:0}}>
            <ScrollView style={{flexDirection:'row' }} horizontal>
                <View style={{flex:2}}>
                    <View style={{width:60, height:60, borderRadius:100,justifyContent:'center', alignItems:'center',borderWidth:2,padding:4}}>
                        <Image 
                         source={ require('../assets/Images/2.jpg')}
                         resizeMode='cover'
                         style={{width:50, height:50,borderRadius:100,justifyContent:'center',alignItems:'center'}}
                         />
                    </View>
                    <Text>Your Story</Text>
                </View>
            </ScrollView>
        </View>
    )
}
import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
// import StatusView from './StatusView';
import {Ionicons,Feather,SimpleLineIcons,MaterialCommunityIcons} from '@expo/vector-icons';
import More from './More';
import Reactions from './Reactions'
import Interactions from './Interactions'
export default function Main(){

    return(
                <View style={{flex:1,marginBottom:5,backgroundColor:'#fff',maxHeight:600,minHeight:600,borderTopWidth:0.5,borderColor:'#eee'}}>
                    <View style={{height:50,maxHeight:70,backgroundColor:'#fff'}}>
                            <More/>
                    </View>

                    <View style={{alignItems:'center',justifyContent:'center',maxHeight:500,height:400}}>
                        <Image
                        source={require('../assets/Images/2.jpg')}
                        style={{minWidth:300,minHeight:300,width:'100%',height:'100%'}}
                        resizeMode="cover"
                        />
                    </View>
                    <View style={{height:50,paddingHorizontal:15,paddingVertical:10}}>
                        <Reactions/>
                    </View>
                    <View style={{height:20}} >
                        <Interactions/>
                   </View> 
                
            </View>
        
    )
}
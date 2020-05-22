import React from 'react';
import {View, TouchableOpacity} from 'react-native';
// import { } from 'react-native-gesture-handler';
import {Ionicons,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';

export default function Footer(){

    return(
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <View>
                <TouchableOpacity>
                        <MaterialCommunityIcons 
                            name="home-variant"
                            size={26}
                        />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                        <Ionicons 
                            name="ios-search"
                            size={26}
                        />
                </TouchableOpacity>
            </View>
            <View style={{borderWidth:0.5, borderRadius:6, width:26, height:26,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity>
                        <Ionicons 
                            name="ios-add"
                            size={26}
                        />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                        <Ionicons 
                            name="ios-heart-empty"
                            size={26}
                        />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                        <AntDesign 
                            name="user"
                            size={26}
                            // style={{color:'#fff', }}
                        />
                </TouchableOpacity>
            </View>
        </View>
    )
}
import React from 'react';
import {View,TouchableOpacity,Image,Text} from 'react-native';
import {Ionicons,Feather} from '@expo/vector-icons'

const Header=()=>{


    return(
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View>
                <TouchableOpacity>
                    <Feather
                        name="camera"
                        size={26}
                    />
                </TouchableOpacity>
            </View>
            <View>
               <Text>Instagram</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Ionicons 
                     name="ios-paper-plane"
                     size={26}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;
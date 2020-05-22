import React from 'react';
import {View} from 'react-native';
import {Ionicons,Feather,SimpleLineIcons,FontAwesome} from '@expo/vector-icons';



const Reactions =()=>{

    return(
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between',width:120}}>
                            <View>
                                <Ionicons 
                                    name="ios-heart-empty"

                                    size={30}
                                />
                            </View>
                            <View>
                                <Feather 
                                    name="message-circle"
                                    size={30}
                                />
                            </View>
                            <View>
                                <SimpleLineIcons 
                                    name="paper-plane"
                                    size={30}
                                />
                            </View>
                            
                        </View>
                         <View>
                                <FontAwesome
                                    name="bookmark-o"
                                    size={30}
                                />
                        </View>
                  </View>
    )
}

export default Reactions;
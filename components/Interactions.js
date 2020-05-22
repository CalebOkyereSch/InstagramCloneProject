import React from 'react';
import {View,Text,Image} from 'react-native'

const Interactions=()=>{

    return(
    <View style={{height:30}} >
        <View style={{flexDirection:'row',marginLeft:15}}>
            <Text style={{fontSize:13,fontWeight:'500',color:'#000',marginRight:3}}>8</Text>
            <Text style={{fontSize:13,fontWeight:'500',color:'#000'}}>likes</Text>
        </View>
        <View style={{flexDirection:'row',marginLeft:15,marginBottom:5}}>
            <Text style={{fontWeight:'600',marginRight:5,fontSize:12}}>Kwame</Text>
            <Text style={{fontSize:11,fontWeight:"400"}}>Hey There </Text>
        </View>
        <View style={{flexDirection:'row',marginLeft:15}}>
            <View style={{width:20,height:20,borderRadius:100,marginRight:10}}>
                <Image 
                    source={require('../assets/Images/1.jpg')}
                    resizeMode="cover"
                    style={{width:20,height:20,borderRadius:100}}

                />
            </View>
            <View style={{flex:2}}>
            <Text style={{color:"#999"}}>Add a comment</Text>
            </View>
        </View>
        <View style={{marginLeft:15,marginVertical:10}}>
            <Text style={{color:'#aaa',fontSize:11,fontWeight:'400'}}>42 minutes ago</Text>
        </View>
    </View>
    )
}

export default Interactions;
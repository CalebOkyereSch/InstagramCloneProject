import React from 'react'
import {TouchableOpacity} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons'


function HomeHeaderLeft({navigation}) {
    return (
        <TouchableOpacity style={{marginLeft:15}} onPress={()=>navigation.push("Camera")}>
           <SimpleLineIcons
                name="camera"
                size={24}
            />
        </TouchableOpacity>
    )
}

export default HomeHeaderLeft

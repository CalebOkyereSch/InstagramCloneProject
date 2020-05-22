import React from 'react'
import {TouchableOpacity} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons'


function HomeHeaderRight({navigation}) {
    return (
        <TouchableOpacity style={{marginRight:15}} onPress={()=>navigation.push("Message")}>
            <SimpleLineIcons
                name="paper-plane"
                size={24}
            />
        </TouchableOpacity>
    )
}

export default HomeHeaderRight

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import MessageScreen from '../screens/MessageScreen/messageScreen';
import CameraScreen from '../screens/CameraScreen/cameraScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

import Logo from '../components/logo'
import HomeHeaderLeft from '../components/homeHeaderLeft';
import HomeHeaderRight from '../components/homeHeaderRight';

const HomeStack= createStackNavigator();

const HomeStackScreen =()=>{
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home" 
          component={HomeScreen}
          options={({navigation})=>({
            headerTitle:()=><Logo change="#000" size={35} />,
            headerLeft:()=><HomeHeaderLeft navigation={navigation} />,
            headerRight:()=><HomeHeaderRight navigation={navigation} />
          })}
         />
         <HomeStack.Screen 
          name="Camera" 
          component={CameraScreen} 
          options={{
           animationEnabled:true
         }}
         />
        <HomeStack.Screen 
          name="Message" 
          component={MessageScreen}
          />
  
      </HomeStack.Navigator>
    )
  }

  export default HomeStackScreen;
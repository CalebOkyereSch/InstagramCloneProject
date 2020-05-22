import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './homeStackNavigator'
import ProfileScreen from  '../screens/ProfileScreen/profileScreen';
import ExploreScreen from '../screens/ExploreScreen/exploreScreen';
import AddPictureScreen from '../screens/AddPictureScreen/addPictureScreen';
import ActivityScreen from   '../screens/ActivityScreen/activityScreen';

import {Home,Explore,Update,Activity,Profile} from '../components/tabBarIcon'

const Tab = createBottomTabNavigator(); 

const BottomTabNavigator=()=>{

    return(
        <Tab.Navigator tabBarOptions={{showLabel:false }} >
        <Tab.Screen 
          name="Home"  
          component={HomeStackScreen} 
          options={{
            tabBarIcon: ({focused}) => <Home focused={focused}/>
          }}
        
        />
        <Tab.Screen 
          name="Explore" 
          component={ExploreScreen}
          options={{
            tabBarIcon: ({focused}) => <Explore focused={focused}/>
          }}
          />
        <Tab.Screen 
          name="Update" 
          component={AddPictureScreen}
          options={{
            tabBarIcon: ({focused}) => <Update focused={focused}/>
          }}
          />
        <Tab.Screen 
          name="Activity" 
          component={ActivityScreen}
          options={{
            tabBarIcon: ({focused}) => <Activity focused={focused}/>
          }}
          />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => <Profile focused={focused}/>
          }}
          />
      </Tab.Navigator>
    )
}

export default BottomTabNavigator;
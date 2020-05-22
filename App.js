import React, {useState,useMemo,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Ionicons,Feather} from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {AuthContext} from './components/HOC/context'
import StartUpScreen from './screens/FirstScreen/startUpScreen'
import AuthenticationStack from './navigations/authStackNavigator'
import BottomTabNavigator from './navigations/bottomStackNavigator'


const fetchFonts = () => {
  return Font.loadAsync({ 
  'billabong': require('./assets/fonts/Billabong.ttf'),
  });
  };
 
  

export default function App(props) {
const [dataLoaded,setDataLoaded] = useState(false);
const[token,setToken] =useState(null);
const [ isLogged, setLogged] =useState(true)

const data = useMemo(()=>{
  return {
    signIn:()=>{
      setLogged(true)
    }
  }
}



)

if(!dataLoaded){
  return (
   <AppLoading 
   
    startAsync={fetchFonts}
    onFinish= {()=> setDataLoaded(true)}
   />
  );
}
return(
  <AuthContext.Provider value ={data}>
    <NavigationContainer>
      { isLogged? <BottomTabNavigator/> : <AuthenticationStack/>}
      
    </NavigationContainer>
  </AuthContext.Provider>
)

}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf',
    
  },
  
}); 

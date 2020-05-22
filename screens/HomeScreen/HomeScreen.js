import React from 'react';
import {View, ScrollView,Image,Text,SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import {Ionicons,Feather,SimpleLineIcons,MaterialCommunityIcons} from '@expo/vector-icons';
import More from '../../components/More';
import StatusView from '../../components/StatusView';


export default function HomeScreen({navigation}){
    return(
        
            <View style={{flex:1,backgroundColor:'#fff'}}>
                
                <ScrollView style={{}} >
                <View style={{flexDirection:'row'}}>
                     <ScrollView horizontal={true}>
                        <StatusView/>
                        <StatusView/>
                        <StatusView/>
                        <StatusView/> 
                        <StatusView/>
                        <StatusView/>
                     </ScrollView>
                </View>
                    <Main/>
                    <Main/>
                    <Main/>
                </ScrollView>
                
            </View>

           
            
        // </SafeAreaView>
    )
}


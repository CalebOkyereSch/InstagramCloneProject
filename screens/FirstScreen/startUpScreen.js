import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import styles from './startUpStyle';

// imported component
import Logo from '../../components/logo';

const StartUpScreen=()=> {
    let rand;
    const [color,setColor]=useState('green');

    const meg =['red','blue','brown','yellow','indigo','violet','#af3']

    useEffect(()=>{
        
        setInterval(()=>{
            rand = Math.floor(Math.random()*4);
            setColor( meg[rand] );
        },300000)
    },[])



    return(
        <View style={styles.container}>
            <View style={{flex:1,backgroundColor:`${color}`}}>
                <View style={{flex:1,marginTop:50}}> 
                    <Logo/>
                </View>
                <View style={{flex:1,marginTop:10}}>
                    <Text style={{fontFamily:'Arial',fontSize:17,textAlign:'center',fontWeight:'bold',color:'#fff'}}>
                        Sign up to see photos and videos {"\n"} from your friends.
                    </Text>
                </View>
            </View>
            <View style={{flex:1}}>

            </View>
        </View>
    )
}

export default StartUpScreen;
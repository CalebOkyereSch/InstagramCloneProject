import React from "react";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Image } from "react-native";
// import { TouchableOpacity } from 'react-native-gesture-handler';

export const Home = ({ focused }) => {
  return (
    <TouchableOpacity>
      <Ionicons name="ios-home" size={30} color={focused ? "#000" : "#aaa"} />
    </TouchableOpacity>
  );
};

export const Explore = ({ focused }) => {
  return (
    <TouchableOpacity>
      <Ionicons name="ios-search" size={30} color={focused ? "#000" : "#aaa"} />
    </TouchableOpacity>
  );
};

export const Update = ({ focused }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 2,
        width: 27,
        height: 27,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: `${focused ? "#000" : "#aaa"}`,
      }}
    >
      <Ionicons name="ios-add" size={30} color={focused ? "#000" : "#aaa"} />
    </TouchableOpacity>
  );
};

export const Activity = ({ focused }) => {
  return (
    <TouchableOpacity>
      <Ionicons name="ios-heart" size={30} color={focused ? "#000" : "#aaa"} />
    </TouchableOpacity>
  );
};

export const Profile = ({ focused }) => {
  return (
    <TouchableOpacity>
      {/* <View style={{width:60, height:60, borderRadius:100,justifyContent:'center', alignItems:'center',borderWidth:2,padding:4}}> */}
      <Image
        source={require("../assets/Images/2.jpg")}
        resizeMode="cover"
        style={{
          width: 32,
          height: 32,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 3,
          borderColor: `${focused ? "#000" : "#aaa"}`,
        }}
      />
      {/* </View> */}
    </TouchableOpacity>
  );
};

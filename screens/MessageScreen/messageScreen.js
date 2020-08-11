import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import MessageComp from "../../components/messageComp";
function MessageScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TextInput
        style={{
          height: 40,
          marginHorizontal: 7,
          marginVertical: 10,
          color: "#888",
          backgroundColor: "#efefef",
          borderRadius: 6,
          fontSize: 14,
          paddingHorizontal: 10,
        }}
        placeholder="Search"
        keyboardType="default"
      />
      <View>
        <MessageComp />
        <MessageComp />
        <MessageComp />
        <MessageComp />
        <MessageComp />
      </View>
    </View>
  );
}

export default MessageScreen;

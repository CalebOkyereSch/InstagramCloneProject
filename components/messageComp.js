import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
function MessageComp() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        alignItems: "center",
        marginVertical: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/Images/2.jpg")}
          resizeMode="cover"
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "500", marginVertical: 5 }}>
            Anaba Eastwood Benjamin
          </Text>
          <Text style={{ fontSize: 12, color: "#aaa" }}>Active 2h ago</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ marginLeft: 15 }}
        onPress={() => navigation.push("Camera")}
      >
        <SimpleLineIcons name="camera" size={24} />
      </TouchableOpacity>
    </View>
  );
}

export default MessageComp;

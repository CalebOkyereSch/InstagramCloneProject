import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
function ActivityComp() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/Images/2.jpg")}
          resizeMode="cover"
          style={{
            width: 47,
            height: 47,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Text style={{ marginLeft: 10, lineHeight: 15.5 }}>
          <Text style={{ fontWeight: "700" }}>__youngdwag </Text>started {"\n"}{" "}
          following you. <Text style={{ color: "#aaa" }}>2d</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 29,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0a34ff",
          borderRadius: 4,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>
          Follow
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ActivityComp;

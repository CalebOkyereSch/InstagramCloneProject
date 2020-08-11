import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ActivityComp from "../../components/activityComp";
function ActivityScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View
        style={{
          flex: 1,
          borderBottomWidth: 0.2,
          borderColor: "#ddd",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18, marginBottom: 5 }}>
          Activity
        </Text>
      </View>
      <View style={{ flex: 9.5 }}>
        <Text
          style={{
            margin: 10,
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          This Week
        </Text>
        <ActivityComp />
        <ActivityComp />
        <ActivityComp />
      </View>
    </View>
  );
}

export default ActivityScreen;

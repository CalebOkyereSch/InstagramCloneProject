import React from "react";
import { View, Text } from "react-native";
const CompData = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontWeight: "700" }}>{props.value}</Text>
      <Text style={{ fontSize: 14 }}>{props.title}</Text>
    </View>
  );
};

export default CompData;

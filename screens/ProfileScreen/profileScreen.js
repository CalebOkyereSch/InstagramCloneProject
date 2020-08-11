import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CompData from "../../components/compData";
function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: 20,
        }}
      >
        <Text />
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "700", fontSize: 16.5, marginRight: 5 }}>
              kojo_champ
            </Text>

            <Ionicons name="ios-arrow-down" size={17} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ height: 40 }}>
          <Ionicons name="ios-menu" size={30} />
        </TouchableOpacity>
      </View>
      {/* Top Picture with data */}
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flex: 4 }}>
          <Image
            source={require("../../assets/Images/2.jpg")}
            style={{
              height: 90,
              width: 90,
              borderRadius: 100,
            }}
            resizeMode="cover"
          />
          <Text style={{ fontWeight: "650", fontSize: 15, marginTop: 10 }}>
            Champion Kojo
          </Text>
          <Text style={{ fontWeight: "400" }}>On break</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            justifyContent: "space-between",
            flex: 6,
          }}
        >
          <CompData value="1" title="Post" />
          <CompData value="3,084" title="Followers" />
          <CompData value="5,206" title="Following" />
        </View>
      </View>
      {/* Edit Profilel Button */}
      <TouchableOpacity
        style={{
          marginHorizontal: 10,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
          height: 30,
          borderWidth: 0.2,
          borderColor: "#ddd",
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 14 }}>Edit Profile</Text>
      </TouchableOpacity>
      {/* Pager for the pictures  */}
      <View style={{ flex: 7, backgroundColor: "#dedede" }}></View>
    </View>
  );
}

export default ProfileScreen;

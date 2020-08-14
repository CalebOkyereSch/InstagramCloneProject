import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
// imported component
import Logo from "../../components/logo";

const StartUpScreen = ({ navigation }) => {
  let rand1;
  let rand2;
  const [color1, setColor1] = useState("#f58529");
  const [color2, setColor2] = useState("#8134af");

  const meg = [
    "#515bd4",
    "#8134af",
    "#dd2a7b",
    "#f58529",
    "#ffdc7d",
    "#f46f30",
    "#7232bd",
    "#4c5fd7",
    "#c32aa3",
  ];

  useEffect(() => {
    setInterval(() => {
      rand1 = Math.floor(Math.random() * 4);
      rand2 = Math.floor(Math.random() * 8);

      setColor1(meg[rand1]);
      setColor2(meg[rand2]);
    }, 10000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1, justifyContent: "space-around" }}
        colors={[color1, color2]}
      >
        <View style={{}}>
          <View style={{ marginTop: 50 }}>
            <Logo size={50} change="white" />
          </View>

          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "#fff",
            }}
          >
            Sign up to see photos and videos from{"\n"} your friends.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 45,
              backgroundColor: "#fff",
              marginHorizontal: 30,
              borderRadius: 5,
            }}
          >
            <Ionicons name="logo-facebook" size={25} color="blue" />
            <Text style={{ marginLeft: 10, color: "blue", fontWeight: "700" }}>
              Log In With Facebook
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 25,
            }}
          >
            <View
              style={{
                borderWidth: 0.1,
                flex: 2,
                borderColor: "#ededed",
                marginLeft: 20,
              }}
            />
            <View style={{ flex: 0.5, alignItems: "center" }}>
              <Text style={{ color: "#eee", fontSize: 11, fontWeight: "800" }}>
                OR
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.1,
                flex: 2,
                borderColor: "#ededed",
                marginRight: 20,
              }}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.push("Sign Up")}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Sign Up With Phone or Email
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <LinearGradient
        style={{
          height: 40,
          borderTopWidth: 0.2,
          borderColor: "#aaa",
          justifyContent: "center",
          alignItems: "center",
        }}
        colors={["#8134af", "#515bd4"]}
      >
        <TouchableOpacity onPress={() => navigation.push("Log In")}>
          <Text style={{ color: "#fff" }}>
            Already have an account? Sign In.
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default StartUpScreen;

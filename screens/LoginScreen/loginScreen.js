import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CloseButton from "../../components/closeButton";
// components
import Logo from "../../components/logo";
import { AuthContext } from "../../components/HOC/context";
const Login = (props) => {
  const { signIn } = useContext(AuthContext);
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff" }}
    >
      <CloseButton navigation={props.navigation} />
      <View style={{ flex: 1.5 }} />
      <View style={{ flex: 5, justifyContent: "center" }}>
        <View style={{ flex: 1.5, marginBottom: 20 }}>
          <Logo change="#000" size={55} />
        </View>
        <View style={{ flex: 9 }}>
          <TextInput
            style={{
              height: 40,
              borderWidth: 0.5,
              borderColor: "#ddd",
              marginHorizontal: 20,
              marginVertical: 7,
              borderRadius: 5,
              padding: 10,
              color: "#aaa",
            }}
            defaultValue=""
            placeholder="Phone number,username or email address"
          />
          <TextInput
            style={{
              height: 40,
              borderWidth: 0.5,
              borderColor: "#ddd",
              marginHorizontal: 20,
              borderRadius: 5,
              padding: 10,
              marginVertical: 7,
              color: "#aaa",
            }}
            defaultValue=""
            placeholder="Password"
            textContentType="password"
          />
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "#aaa",
                marginRight: 10,
                fontSize: 12,
                color: "#42b6f5",
              }}
            >
              Forgotten password?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => signIn()}
            style={{
              backgroundColor: "rgb(66,182,245)",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#42b6f5",
              borderWidth: 1,
              borderRadius: 5,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>Log In</Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="logo-facebook" size={26} color="#4286f5" />
            <Text
              style={{
                marginHorizontal: 5,
                color: "#42a6f5",
                fontWeight: "700",
                fontSize: 12,
              }}
            >
              Log in with Facebook
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <View
              style={{ borderWidth: 0.5, flex: 2, borderColor: "#ededed" }}
            />
            <View style={{ flex: 0.5, alignItems: "center" }}>
              <Text style={{ color: "#888", fontSize: 11, fontWeight: "700" }}>
                OR
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                flex: 2,
                height: 1,
                borderColor: "#ededed",
              }}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ fontSize: 13, color: "#aaa", marginRight: 5 }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => props.navigation.push("Sign Up")}>
              <Text style={{ fontSize: 13, color: "#42b6f5" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          borderTopWidth: 0.5,
          bottom: 0,
          left: 0,
          right: 0,
          borderColor: "#ededed",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#aaa", fontSize: 11 }}>
          Instagram from Facebook
        </Text>
      </View>
    </View>
  );
};

export default Login;

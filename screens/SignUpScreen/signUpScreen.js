import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CloseButton from "../../components/closeButton";
function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <CloseButton navigation={navigation} />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            marginTop: 20,
            marginBottom: 10,
            fontWeight: "300",
          }}
        >
          Create Username
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#aaa",
            paddingHorizontal: 20,
            textAlign: "center",
          }}
        >
          Pick a username for your new account. You can alwayes change it later.
        </Text>
      </View>
      <View>
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
          placeholder="Username"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "rgb(66,182,245)",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#42b6f5",
            borderWidth: 1,
            borderRadius: 5,
            marginHorizontal: 20,
            marginVertical: 20,
          }}
        >
          <Text style={{ color: "#fff" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUpScreen;

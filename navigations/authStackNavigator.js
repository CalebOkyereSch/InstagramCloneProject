import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../screens/SignUpScreen/signUpScreen";
import Login from "../screens/LoginScreen/loginScreen";
import StartUpScreen from "../screens/FirstScreen/startUpScreen";

const AuthStack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator headerMode="none" mode="modal">
      <AuthStack.Screen name="Start Up" component={StartUpScreen} />
      <AuthStack.Screen name="Log In" component={Login} />
      <AuthStack.Screen name="Sign Up" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthenticationStack;

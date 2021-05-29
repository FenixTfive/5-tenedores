import React from "react";
//creador del stack
import { createStackNavigator } from "@react-navigation/stack";

//paginas o componentes por stack
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";
//stack function
const Stack = createStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "Iniciar Sesión",
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registro" }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;

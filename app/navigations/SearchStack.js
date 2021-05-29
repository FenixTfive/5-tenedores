import React from "react";
//creador del stack
import { createStackNavigator } from "@react-navigation/stack";

//paginas o componentes por stack
import Search from "../screens/Search";

//stack function
const Stack = createStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        options={{ title: "Buscador" }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStack;

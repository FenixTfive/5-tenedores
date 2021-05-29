import React from "react";
//creador del stack
import { createStackNavigator } from "@react-navigation/stack";

//paginas o componentes por stack
import Restaurants from "../screens/Restaurants";

//stack function
const Stack = createStackNavigator();
const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{ title: "Restaurantes" }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantsStack;

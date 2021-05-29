import React from "react";
//creador del stack
import { createStackNavigator } from "@react-navigation/stack";

//paginas o componentes por stack
import TopRestaurants from "../screens/TopRestaurants";

//stack function
const Stack = createStackNavigator();

const TopRestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurants"
        component={TopRestaurants}
        options={{ title: "Los mejores restaurantes" }}
      />
    </Stack.Navigator>
  );
};

export default TopRestaurantsStack;

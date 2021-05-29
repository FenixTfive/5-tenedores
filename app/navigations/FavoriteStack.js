import React from "react";
//creador del stack
import { createStackNavigator } from "@react-navigation/stack";

//paginas o componentes por stack
import Favorites from "../screens/Favorites";

//stack function
const Stack = createStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ title: "Restaurantes Favoritos" }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStack;

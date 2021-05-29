import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
// importacion de stack
import RestaurantsStack from "../navigations/RestaurantsStack";
import FavoriteStack from "../navigations/FavoriteStack";
import TopRestaurantsStack from "../navigations/TopRestaurantsStack";
import SearchStack from "../navigations/SearchStack";
import AccountStack from "../navigations/AccountStack";

//para crear cada tab screen
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "restaurants":
        iconName = "compass-outline";
        break;
      case "favorites":
        iconName = "heart-outline";
        break;
      case "top-restaurants":
        iconName = "star-outline";
        break;
      case "search":
        iconName = "magnify";
        break;
      case "account":
        iconName = "home-outline";
        break;
      default:
        break;
    }
    return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{
            title: "Restaurantes",
          }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoriteStack}
          options={{
            title: "Favoritos",
          }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{
            title: "Top 5",
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          option={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

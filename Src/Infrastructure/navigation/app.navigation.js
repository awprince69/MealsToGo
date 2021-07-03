import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../Features/Map/Screen/MapScreen";
import { RestaurantsContextProvider } from "../../Services/Restauresnts/RestaurentsContext";
import { LocationContextProvider } from "../../Services/Location/Location.context";
import { FavoritesContextProvider } from "../../Services/Favorites/FavoritesContext";
import { SettingsNavigator } from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

const TabIcon = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};
const CreateScreenOptions = ({ route }) => {
  const iconName = TabIcon[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={CreateScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "#72BAFC",
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);

import React, { useContext } from "react";
import { AppNavigator } from "./app.navigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../Services/Authentication/AuthenticationContext";
import { AccountNavigator } from "./AccountNavigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

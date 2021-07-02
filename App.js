import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./Src/Infrastructure/Theme";
import { RestaurantsContextProvider } from "./Src/Services/Restauresnts/RestaurentsContext";
import { LocationContextProvider } from "./Src/Services/Location/Location.context";
import { Navigation } from "./Src/Infrastructure/navigation";
import { FavoritesContextProvider } from "./Src/Services/Favorites/FavoritesContext";
import firebase from "firebase";
import { firebaseConfig } from "./Src/Services/Firebase/FirebaseConfig";
import { AuthenticationContextProvider } from "./Src/Services/Authentication/AuthenticationContext";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RestaurantList } from "../../Restaurant/Components/RestaurantListStyles";
import { SafeArea } from "../../../Components/Utility/SafeAreaComponent";
import { FavoritesContext } from "../../../Services/Favorites/FavoritesContext";
import { Spacer } from "../../../Components/Spacer/Spacer";
import { RestaurantInfo } from "../../Restaurant/Components/RestaurantInfo";
import { Text } from "../../../Components/Typography/Typography";

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavoriteScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};

import React from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../Components/Spacer/Spacer";
import { SafeArea } from "../../../Components/Utility/SafeAreaComponent";
import { useContext } from "react";
import { RestaurantsContext } from "../../../Services/Restauresnts/RestaurentsContext";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Search } from "../Components/Search";
import { RestaurantInfo } from "../Components/RestaurantInfo";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfo restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

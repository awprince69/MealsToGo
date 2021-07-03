import React, { useContext } from "react";
import styled from "styled-components";
import { AuthenticationContext } from "../../../Services/Authentication/AuthenticationContext";
import { SafeArea } from "../../../Components/Utility/SafeAreaComponent";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../Components/Typography/Typography";
import { Spacer } from "../../../Components/Spacer/Spacer";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ padding: 16 }}
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

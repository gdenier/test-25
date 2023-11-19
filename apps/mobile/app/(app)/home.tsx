import { FlatList, StyleSheet } from "react-native";
import { useAuth, useCurrentUser, useCurrentUserPosts } from "shared";
import {
  Button,
  ButtonLabel,
  Text,
  View,
} from "../../components/ui/design-system";
import { UserAvatar } from "../../components/UserAvatar";

export default function HomeScreen() {
  const { logout } = useAuth();

  const { data: user } = useCurrentUser();
  const { data: posts } = useCurrentUserPosts();

  return (
    <View tw="pb-32">
      {user ? (
        <View>
          <View tw="flex-row justify-between items-center">
            <View tw="items-center flex-row gap-2">
              <UserAvatar name={user?.name} />
              <Text>{user?.name}</Text>
            </View>
            <Button variant="primary" tw="px-3" onPress={logout}>
              <ButtonLabel>Log out</ButtonLabel>
            </Button>
          </View>
          {posts ? (
            <FlatList
              data={posts}
              renderItem={({ item }) => (
                <View tw="px-2 py-6">
                  <Text variant="text-xl" tw="pb-2">
                    {item.title}
                  </Text>
                  <Text>{item.body}</Text>
                </View>
              )}
            />
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

import { Slot } from "expo-router";
import { Redirect } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "shared";

export default function AppLayout() {
  const { user } = useAuth();
  const insets = useSafeAreaInsets();

  console.log("app_layout");

  if (!user) return <Redirect href="/(auth)/sign_in" />;

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Slot />
    </View>
  );
}

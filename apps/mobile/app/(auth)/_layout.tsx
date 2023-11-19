import { Redirect, Slot } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "shared";
import { View } from "../../components/ui/design-system";

export default function AuthLayout() {
  const { user } = useAuth();
  const insets = useSafeAreaInsets();

  console.log("auth_layout");

  if (user) return <Redirect href="/(app)/home" />;

  console.log("auth_layout connected");

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      tw="px-2 bg-white"
    >
      <Slot />
    </View>
  );
}

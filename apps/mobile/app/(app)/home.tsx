import { StyleSheet, View, Text, Button } from "react-native";
import { useAuth } from "shared";

export default function HomeScreen() {
  const { logout } = useAuth();

  return (
    <View>
      <Text style={styles.title}>HomeScreen</Text>
      <Button title="log out" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
});

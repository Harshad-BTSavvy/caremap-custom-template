import { ROUTES } from "@/utils/route";
import { router } from "expo-router";
import { Alert, Button, Text, View } from "react-native";

export default function Tab2() {
  const handleSignOut = async () => {
    Alert.alert("Signing out.");
    router.replace(`${ROUTES.LAUNCH}`);
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>Welcome to Tab 2</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

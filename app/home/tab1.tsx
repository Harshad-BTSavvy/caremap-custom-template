import { UserContext } from "@/context/UserContext";
import { initializeMockSession } from "@/services/core/UserService";
import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Tab1() {
  const { user, setUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeMockSession(setUserData).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>User name: {user?.name}</Text>
      <Text>User email : {user?.email}</Text>
    </View>
  );
}

import { ROUTES } from "@/utils/route";
import { Redirect } from "expo-router";
import React from "react";
import { View } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Redirect href={ROUTES.LAUNCH} />
    </View>
  );
};

export default Index;

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { UserProvider } from "@/context/UserContext";
import "@/global.css";
import { initializeDatabase } from "@/services/database/db";
import { SQLITE_DB_NAME } from "@/utils/config";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import React from "react";

const RootLayout = () => {
  return (
    <GluestackUIProvider mode="light">
      <SQLiteProvider databaseName={SQLITE_DB_NAME} onInit={initializeDatabase}>
        <UserProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              headerBackVisible: false,
            }}
          />
        </UserProvider>
      </SQLiteProvider>
    </GluestackUIProvider>
  );
};

export default RootLayout;

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="tab1"
        options={{
          title: "Tab One",
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "Tab Two",
        }}
      />
    </Tabs>
  );
}

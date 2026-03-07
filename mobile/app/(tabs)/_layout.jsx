import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";

const HomeTabIcon = ({ color, size }) => (
  <Ionicons name="home-outline" size={size} color={color} />
);

const PersonTabIcon = ({ color, size }) => (
  <Ionicons name="person-outline" size={size} color={color} />
);

const CreateTabIcon = ({ color, size }) => (
  <Ionicons name="add-circle-outline" size={size} color={color} />
);

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        headerTitleStyle: {
          color: COLORS.textPrimary,
          fontWeight: "600",
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: COLORS.cardBackground,
          borderTopWidth: 1,
          borderTopColor: COLORS.border,
          paddingTop: 5,
          paddingBottom: insets.bottom,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: CreateTabIcon,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", tabBarIcon: PersonTabIcon }}
      />
    </Tabs>
  );
}

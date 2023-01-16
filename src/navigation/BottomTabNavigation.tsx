import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HistoryListScreen } from "../screens/HistoryListScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { TabIcon } from "../components/TabIcon";

type IconName = keyof typeof Ionicons.glyphMap;

const Tabs = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    const getIconName = (routeName: string): IconName => {
                        switch (routeName) {
                            case "Home":
                                return "home";
                            case "History":
                                return "time";
                            default:
                                return "home";
                        }
                    };
                    return (
                        <TabIcon
                            iconName={getIconName(route.name)}
                            iconColor={color}
                        />
                    );
                },
            })}
        >
            <Tabs.Screen name="Home" component={HomeScreen} />
            <Tabs.Screen name="History" component={HistoryListScreen} />
        </Tabs.Navigator>
    );
};

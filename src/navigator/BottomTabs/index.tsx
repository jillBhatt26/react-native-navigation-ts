import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '@/screens/Home';
import AboutScreen from '@/screens/About';
import ContactScreen from '@/screens/Contact';
import { TBottomTabsNavigatorParamList } from '@/types';

const BottomTabs = createBottomTabNavigator<TBottomTabsNavigatorParamList>();

const BottomTabsNavigator = (): JSX.Element => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="home"
                            size={30}
                            color={focused ? 'blue' : 'black'}
                            className={`${
                                focused ? 'bg-blue-500' : 'bg-black'
                            }`}
                        />
                    ),
                    tabBarLabelStyle: { fontSize: 12, marginTop: 0 },
                    tabBarStyle: {
                        height: 55
                    }
                }}
            />

            <BottomTabs.Screen
                name="About"
                component={AboutScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="info-with-circle"
                            size={30}
                            color={focused ? 'blue' : 'black'}
                        />
                    ),
                    tabBarLabelStyle: { fontSize: 12, marginTop: 0 },
                    tabBarStyle: {
                        height: 55
                    }
                }}
            />

            <BottomTabs.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="contact-page"
                            size={30}
                            color={focused ? 'blue' : 'black'}
                        />
                    ),
                    tabBarLabelStyle: { fontSize: 12, marginTop: 0 },
                    tabBarStyle: {
                        height: 55
                    }
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default BottomTabsNavigator;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@/screens/Splash';
import { TRootStackParamList } from '@/types';
import DrawerNavigator from '../Drawer';

const RootStack = createNativeStackNavigator<TRootStackParamList>();

const RootStackNavigator = (): JSX.Element => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
            />

            <RootStack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
};

export default RootStackNavigator;

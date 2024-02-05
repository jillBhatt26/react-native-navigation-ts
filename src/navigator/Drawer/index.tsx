import { createDrawerNavigator } from '@react-navigation/drawer';
import { TDrawerNavigatorParamList } from '@/types';

import BottomTabsNavigator from '../BottomTabs';
import DrawerContent from './content';

const Drawer = createDrawerNavigator<TDrawerNavigatorParamList>();

const DrawerNavigator = (): JSX.Element => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen
                name="BottomTabsNavigator"
                component={BottomTabsNavigator}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

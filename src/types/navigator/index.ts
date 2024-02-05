import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type TRootStackParamList = {
    Splash: undefined;
    DrawerNavigator: undefined;
};

type TDrawerNavigatorParamList = {
    BottomTabsNavigator: undefined;
};

type TBottomTabsNavigatorParamList = {
    Home: undefined;
    About: undefined;
    Contact: undefined;
};

type TRootStackNavigatorProps = NativeStackScreenProps<
    TRootStackParamList,
    'Splash',
    'DrawerNavigator'
>;

// type TDrawerNavigatorProps = NativeStackScreenProps<
//     TDrawerNavigatorParamList,
//     'BottomTabsNavigator'
// >;

// type TBottomTabsNavigatorProps = NativeStackScreenProps<
//     TBottomTabsNavigatorParamList,
//     'Home' | 'About' | 'Contact'
// >;

export {
    TRootStackParamList,
    TRootStackNavigatorProps,
    TDrawerNavigatorParamList,
    // TDrawerNavigatorProps,
    TBottomTabsNavigatorParamList
    // TBottomTabsNavigatorProps
};

import { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TRootStackNavigatorProps } from '@/types';

const SplashScreen: FC<TRootStackNavigatorProps> = ({
    navigation
}): JSX.Element => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('DrawerNavigator');
        }, 3000);
    }, []);

    return (
        <View className="flex-1 justify-center items-center bg-sky-800">
            <Text className="text-xl text-gray-300 font-light">
                Splash Screen
            </Text>

            <StatusBar style="auto" />
        </View>
    );
};

export default SplashScreen;

import { FC } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const DrawerContent: FC<DrawerContentComponentProps> = (): JSX.Element => {
    return (
        <View className="flex-1 justify-center items-center bg-gray-900">
            <Text className="text-xl text-gray-100 font-light">
                Drawer Content
            </Text>

            <StatusBar style="auto" />
        </View>
    );
};

export default DrawerContent;

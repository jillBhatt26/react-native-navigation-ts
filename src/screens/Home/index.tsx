import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = (): JSX.Element => {
    return (
        <View className="flex-1 justify-center items-center bg-emerald-500">
            <Text className="text-xl text-gray-300 font-light">
                Home Screen
            </Text>

            <StatusBar style="auto" />
        </View>
    );
};

export default HomeScreen;

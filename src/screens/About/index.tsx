import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const AboutScreen = (): JSX.Element => {
    return (
        <View className="flex-1 justify-center items-center bg-zinc-700">
            <Text className="text-xl text-gray-300 font-light">
                About Screen
            </Text>

            <StatusBar style="auto" />
        </View>
    );
};

export default AboutScreen;

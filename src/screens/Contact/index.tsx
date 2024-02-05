import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ContactScreen = (): JSX.Element => {
    return (
        <View className="flex-1 justify-center items-center bg-teal-800">
            <Text className="text-xl text-gray-300 font-light">
                Contact Screen
            </Text>

            <StatusBar style="auto" />
        </View>
    );
};

export default ContactScreen;

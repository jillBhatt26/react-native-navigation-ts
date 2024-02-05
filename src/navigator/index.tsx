import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStack';

const AppNavigator = (): JSX.Element => {
    return (
        <NavigationContainer>
            <RootStackNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;

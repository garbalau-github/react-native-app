import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Home } from './src/screens/Home';
import { Details } from './src/screens/Details';
import { Profile } from './src/screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

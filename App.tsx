import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Home } from './src/screens/Home';
import { Advices } from './src/screens/Advices';
import { Saved } from './src/screens/Saved';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Advices' component={Advices} />
        <Stack.Screen name='Saved' component={Saved} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

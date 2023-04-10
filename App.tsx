import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Home } from './src/screens/Home';
import { Advices } from './src/screens/Advices';
import { Saved } from './src/screens/Saved';
import { SearchAdvices } from './src/screens/SearchAdvices';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Advices' component={Advices} />
        <Stack.Screen name='SearchAdvices' component={SearchAdvices} />
        <Stack.Screen name='Saved' component={Saved} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

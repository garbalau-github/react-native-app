import { Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details' as never)}
      />
    </View>
  );
};

import { Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export const Details = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title='Go to Home'
        onPress={() => navigation.navigate('Home' as never)}
      />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};
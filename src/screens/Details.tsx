import { Button, View, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

// Components
import { Heading } from '../components/Heading';
import { Jumbotron } from '../components/Jumbotron';

export const Details = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      <Heading page='Details' />
      <Jumbotron title='Details page' text='Hello, hello' />
      <View className='flex-1 relative items-center justify-center'>
        <Button
          title='Go to Home'
          onPress={() => navigation.navigate('Home' as never)}
        />
      </View>
    </SafeAreaView>
  );
};

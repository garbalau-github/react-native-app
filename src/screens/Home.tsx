import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';

// Components
import { Heading } from '../components/Heading';
import { Jumbotron } from '../components/Jumbotron';

export const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      <Heading page='Home' />
      <Jumbotron title='Welcome' text='Hello, hello' />
      <View className='w-[350px] h-[350px] bg-teal-300 rounded-full absolute bottom-36 -right-36'></View>
      <View className='w-[350px] h-[350px] bg-purple-300 rounded-full absolute -bottom-28 -left-36'></View>
      <View className='flex-1 relative items-center justify-center'>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details' as never)}
          className='absolute bottom-20 w-24 h-24 rounded-full items-center justify-center'
        >
          <Animatable.View
            animation={'pulse'}
            easing='ease-in-out'
            iterationCount={'infinite'}
            className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border border-gray-300 rounded shadow'
          >
            <Text className='text-xl font-semibold'>Start</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

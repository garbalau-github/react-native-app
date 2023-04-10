import { Text, Button, View, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

// Store
import { useAdviceStore } from '../store/store';

// Hooks
import { useAdvice } from '../hooks/useAdvice';

// Components
import { Heading } from '../components/Heading';
import { Jumbotron } from '../components/Jumbotron';

export const Details = () => {
  const navigation = useNavigation();
  const { advice, fetchAdvice } = useAdvice();
  const { advices, addAdvice } = useAdviceStore();

  const checkIfAdviceExists = (advice: any) => {
    return advices.some((adviceItem) => adviceItem.slip.id === advice.slip.id);
  };

  const saveAdvice = () => {
    console.log(advice);
    addAdvice(advice);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      <Heading page='Details' />
      <Jumbotron title='Advice' text='Get your advice now' />
      <Button title='Load more' onPress={fetchAdvice} />
      <Button
        title='Saved'
        onPress={() => navigation.navigate('Profile' as never)}
      />
      <View className='flex-1 relative items-center justify-center'>
        {advice && (
          <View className='flex-1 relative items-center justify-center'>
            <Text className='text-3xl font-semibold'>{advice.slip.advice}</Text>
          </View>
        )}
        {checkIfAdviceExists(advice) ? (
          <Text className='text-lg'>Advice saved</Text>
        ) : (
          <Button title='Save advice' onPress={saveAdvice} />
        )}
      </View>
    </SafeAreaView>
  );
};

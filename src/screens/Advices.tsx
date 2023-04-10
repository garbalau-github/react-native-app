import { Text, Button, View, SafeAreaView, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

// Store
import { useAdviceStore } from '../store/store';

// Hooks
import { useAdvice } from '../hooks/useAdvice';

// Components
import { Heading } from '../components/Heading';
import { Jumbotron } from '../components/Jumbotron';

export const Advices = () => {
  const navigation = useNavigation();
  const { advice, fetchAdvice } = useAdvice();
  const { advices, addAdvice } = useAdviceStore();

  const checkIfAdviceExists = (advice: any) => {
    return advices.some((adviceItem) => adviceItem.slip.id === advice.slip.id);
  };

  const saveAdvice = () => {
    addAdvice(advice);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      <View className='flex-row justify-between text-center'>
        <Heading page='Advices' />
        <Button
          title='Saved'
          onPress={() => navigation.navigate('Saved' as never)}
        />
      </View>
      <Jumbotron
        // title='Advices'
        text='Get your daily portion of advices right now!'
      />
      <Button title='Load more' onPress={fetchAdvice} />
      <Text>Looking for specific advice?</Text>
      <Button
        title='Load more'
        onPress={() => navigation.navigate('SearchAdvices' as never)}
      />
      <View className='flex-1 relative items-center justify-center'>
        {advice.slip && (
          <View className='flex-1 relative items-center justify-center'>
            <Text className='text-3xl font-semibold'>{advice.slip.advice}</Text>
          </View>
        )}
        {checkIfAdviceExists(advice) ? (
          <Text className='text-lg text-purple-800'>Saved</Text>
        ) : (
          <Button title='Save advice' onPress={saveAdvice} />
        )}
      </View>
    </SafeAreaView>
  );
};

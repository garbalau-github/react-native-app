import { Text, Button, View, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

// Components
import { Heading } from '../components/Heading';
import { Jumbotron } from '../components/Jumbotron';
import { useAdviceStore } from '../store/store';

export const Profile = () => {
  const navigation = useNavigation();
  const { advices, removeAdvice } = useAdviceStore();

  const deleteAdvice = (id: number) => {
    removeAdvice(id);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      <Heading page='Profile' />
      <Jumbotron title='Profile' text='You can find saved advices here' />
      <Button
        title='Back to'
        onPress={() => navigation.navigate('Details' as never)}
      />
      <View className='flex-1 relative items-center justify-center'>
        <Text className='text-lg'>Saved advices</Text>
        {advices && (
          <>
            {advices.map((advice) => (
              <View>
                <View className='bg-yellow-400 my-2'>
                  <Text>advice: {advice.slip.advice}</Text>
                  <Text>id: {advice.slip.id}</Text>
                </View>
                <Button
                  title='Delete'
                  onPress={() => deleteAdvice(advice.slip.id)}
                />
              </View>
            ))}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

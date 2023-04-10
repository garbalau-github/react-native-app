import { Text, Button, View, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

// Components
import { Heading } from '../components/Heading';
import { Jumbotron } from '../components/Jumbotron';
import { useAdviceStore } from '../store/store';

export const Saved = () => {
  const navigation = useNavigation();
  const { advices, removeAdvice } = useAdviceStore();

  const deleteAdvice = (id: number) => {
    removeAdvice(id);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      <Heading page='Profile' />
      <Jumbotron
        // title='Profile'
        text='You can find saved advices here'
      />
      <Text className='text-lg font-semibold'>
        Saved {advices.length} advices
      </Text>
      {/* <Button
        title='Back to'
        onPress={() => navigation.navigate('Details' as never)}
      /> */}
      <View className='flex-1 relative items-center justify-center'>
        <Text className='text-lg'>Saved Advices</Text>
        {advices && (
          <>
            {advices.map((advice) => (
              <View className='bg-yellow-400 my-2'>
                <View>
                  <Text>advice: {advice.slip.advice}</Text>
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

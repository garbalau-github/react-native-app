import { View, Text } from 'react-native';

type JumbotronProps = {
  title?: string;
  text?: string;
};

export const Jumbotron = ({ title, text }: JumbotronProps) => {
  return (
    <View className='px-6 mt-8 space-y-3'>
      <Text className='text-7xl font-medium'>{title}</Text>
      <Text className='text-base'>{text}</Text>
    </View>
  );
};

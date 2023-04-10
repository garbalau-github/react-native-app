import { View, Text } from 'react-native';

type HeadingProps = {
  page: string;
};

export const Heading = ({ page }: HeadingProps) => {
  return (
    <View className='flex-row px-6 mt-8 items-center space-x-2'>
      <Text className='text-3xl font-semibold'>{page}</Text>
    </View>
  );
};

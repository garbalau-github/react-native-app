import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useAdviceQuery } from '../hooks/useAdviceQuery';

export const SearchAdvices = () => {
  const [text, setText] = useState('');

  const { fetchAdviceByQuery } = useAdviceQuery();

  const handleSubmit = async () => {
    const items = await fetchAdviceByQuery(text);
    console.log(items);
  };

  return (
    <View>
      <View>
        <Text>Search for advices</Text>
        <TextInput
          placeholder='Type something here'
          onChangeText={setText}
          value={text}
          onSubmitEditing={handleSubmit}
          returnKeyType='done' // This will change the return key label to "Done" on iOS
        />
      </View>
    </View>
  );
};

export default SearchAdvices;

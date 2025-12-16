import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function CourtDetailScreen({ route, reviews, setReviews }) {
  const { court } = route.params;
  const [text, setText] = useState('');

  const addReview = () => {
    if (!text) return;

    setReviews(prev => [...prev, { courtName: court.name, text }]);
    setText('');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{court.name}</Text>

      <TextInput
        placeholder="Write a review"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 8, marginVertical: 12 }}
      />

      <Button title="Add Review" onPress={addReview} />

      <FlatList
        data={reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ marginTop: 8 }}>
            {item.courtName}: {item.text}
          </Text>
        )}
      />
    </View>
  );
}

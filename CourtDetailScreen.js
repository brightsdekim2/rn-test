import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function CourtDetailScreen({ route }) {
  const { court } = route.params;

  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState('');

  const addReview = () => {
    if (!text) return;
    setReviews([...reviews, text]);
    setText('');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        {court.name}
      </Text>

      <TextInput
        placeholder="Write a review"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 8, marginVertical: 12 }}
      />

      <Button title="Add Review" onPress={addReview} />

      <FlatList
        data={reviews}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => (
          <Text style={{ marginTop: 8 }}>
            {court.name}: {item}
          </Text>
        )}
      />
    </View>
  );
}

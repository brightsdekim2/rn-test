import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';

const COURTS = [
  { id: '1', name: 'Court A' },
  { id: '2', name: 'Court B' },
  { id: '3', name: 'Court C' },
];

export default function CourtListScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filtered = COURTS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Search courts"
        value={search}
        onChangeText={setSearch}
        style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
      />

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Court', { court: item })}
            style={{ padding: 12, borderBottomWidth: 1 }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

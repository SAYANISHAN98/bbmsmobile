// app/search/[query].js

import { useRouter, useSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function SearchQuery() {
  const router = useRouter();
  const { query } = useSearchParams();

  return (
    <View>
      <Text>Search Query: {query}</Text>
    </View>
  );
}

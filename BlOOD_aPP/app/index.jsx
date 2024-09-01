import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
    <Link href={'/(tabs)'} asChild>
      <Button text="User" />
    </Link>
   

    <Button onPress={() => supabase.auth.signOut()} text="Sign out" />
  </View>
  );
}
 
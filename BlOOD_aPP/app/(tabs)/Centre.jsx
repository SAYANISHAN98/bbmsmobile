import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../../constants';

const BloodCentresNearYou = () => {
  const centres = [
    { name: 'Jaffna Hospital', distance: '5km', time: '10 mins', image: 'https://example.com/jaffna-hospital.png', color: '#ff8080' },
    { name: 'Thellipalai Hospital', distance: '8km', time: '20 mins', image: 'https://example.com/thellipalai-hospital.png', color: '#add8e6' },
    { name: 'Karainagar Hospital', distance: '20km', time: '1 hr', image: 'https://example.com/karainagar-hospital.png', color: '#add8e6' },
    { name: 'Kilinochi Hospital', distance: '100km', time: '3 hrs', image: 'https://example.com/kilinochi-hospital.png', color: '#add8e6' },
  ];

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FD0000', '#FFFFFF']}
      locations={[0.3, 0.7, 1]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#ffecec',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'left', color: '#FFFFFF', padding: 15 }}>
              <Text style={{ color: '#FD0000' }}>
                Blood Centres Near You !!!
              </Text>
            </Text>

            <Text> {""}</Text>
            <Text> {""}</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 20,
                paddingLeft: 10,
                marginBottom: 20,
                width: '100%',
                maxWidth: 350,
              }}
              placeholder="Search"
            />

            {centres.map((centre, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: centre.color,
                  padding: 10,
                  borderRadius: 10,
                  marginVertical: 5,
                  width: '100%',
                  maxWidth: 350,
                }}
              >
                <Image
                  source={images.Hospital} // replace with your image URL or local path
                  style={{ width: 60, height: 60, borderRadius: 10, marginRight: 10 }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
                    {centre.name}
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:10, padding:12, marginRight: 5 }}>
                    <Ionicons name="location-sharp" size={20} color="#000" style={{ marginRight: 5 }} />
                    <Text style={{ fontSize: 14, color: '#000' }}>{centre.distance}</Text>
                    <Ionicons name="time-outline" size={20} color="#000" style={{ marginLeft: "40%", marginRight: 5 }} />
                    <Text style={{ fontSize: 14, color: '#000' }}>{centre.time}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => alert(`Navigating to ${centre.name}`)}>
                  <Ionicons name="chevron-forward" size={24} color="#000" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default BloodCentresNearYou;

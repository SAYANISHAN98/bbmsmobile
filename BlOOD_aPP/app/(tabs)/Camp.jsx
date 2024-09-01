import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function BloodBankCamp({ navigation }) {
  const camps = [
    { date: '03 August 2024', location: 'Faculty of Science, University of Jaffna.' },
    { date: '08 August 2024', location: 'Thellipalai Hospital' },
    { date: '20 August 2024', location: 'Jaffna Hospital' },
    { date: '28 August 2024', location: 'Jaffna Hospital' },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 25,
      }}
    >
      <View
        style={{
          backgroundColor: '#ffecec',
          padding: 25,
          borderRadius: 10,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'left', color: '#FFFFFF' ,padding:15}}>
            <Text style={{ color: '#FD0000' }}>
                Blood Bank Camp
            </Text>
        </Text>
        <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'right', color: '#111111',}}>
            Near You.........
         </Text>
         <Text> {""}</Text>
        <Image
            source={images.profile}
            style={{ maxWidth: 380, width: '100%', height: 180 }}
            resizeMode="contain"
        />

        <Text> {""}</Text>
        <Text> {""}</Text>

        {camps.map((camp, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#add8e6',
              padding: 10,
              borderRadius: 10,
              marginVertical: 5,
              width: '100%',
              maxWidth: 350,
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={images.profile}
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
                  {camp.date}
                </Text>
                <Text style={{ fontSize: 14, color: '#000' }}>{camp.location}</Text>
              </View>
            </View>
           
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

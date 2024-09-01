import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function DonationHistory() {
  const donations = [
    { date: '03 February 2024', location: 'Jaffna Hospital', amount: '200 ml' },
    { date: '05 October 2023', location: 'Thellipalai Hospital', amount: '250 ml' },
    { date: '01 June 2023', location: 'Jaffna Hospital', amount: '200 ml' },
    { date: '03 February 2023', location: 'Jaffna Hospital', amount: '250 ml' },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
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
        <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'left', color: '#FFFFFF' ,padding:15}}>
            <Text style={{ color: '#FD0000' }}>
                Donation History !!!
            </Text>
        </Text>
        
        <Image
            source={images.thumbnail}
            style={{ maxWidth: 380, width: '100%', height: 180 }}
            resizeMode="contain"
        />
        
        {donations.map((donation, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#ff767b',
              padding: 20,
              borderRadius: 20,
              marginVertical: 5,
              width: '100%',
              maxWidth: 500,
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={images.profile}
                style={{ width: 40, height: 40, marginRight: 10 }}
                resizeMode="contain"
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                  {donation.date}
                </Text>
                <Text style={{ fontSize: 14, color: '#fff' }}>{donation.location}</Text>
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#00cec9' }}>
              {donation.amount}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

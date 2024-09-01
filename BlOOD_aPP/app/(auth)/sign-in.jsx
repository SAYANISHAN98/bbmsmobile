import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


const SignIn = () => {                               
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        
    };

    return (
        <LinearGradient
            colors={['#FFFFFF', '#FD0000', '#FFFFFF', '#FD0000', '#FFFFFF', '#FFFFFF']} // Gradient colors
            locations={[0.4, 0.8, 1, 0.2, 0.3, 0.5]} // Color stop locations
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', minHeight: '85vh', paddingHorizontal: 16 }}>
                        <View style={{ width: '100%', justifyContent: 'center', minHeight: '8vh', paddingHorizontal: 16, marginVertical: 24 }}>
                            <View style={{ position: 'relative', marginTop: 20 }}>
                                <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}>
                                    <Text style={{ color: '#FD0000' }}>
                                        Blood KING
                                    </Text>
                                </Text>
                                <Image
                                    source={images.path}
                                    style={{ width: 180, height: 15, position: 'absolute', bottom: -8, right: -0.5 }}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center', color: '#111111', marginTop: 20 }}>
                                "Tears of a mother cannot save her Child. But your Blood can."
                            </Text>
                            <Image
                                source={images.cards}
                                style={{ maxWidth: 380, width: '100%', height: 180 }}
                                resizeMode="contain"
                            />
                            <FormField
                                title="Email"
                                value={form.email}
                                handleChangeText={(e) => setForm({ ...form, email: e })}
                                otherStyles={{ marginTop: 20 }}
                                keyboardType="email-address"
                            />
                            <FormField
                                title="Password"
                                value={form.password}
                                handleChangeText={(e) => setForm({ ...form, password: e })}
                                otherStyles={{ marginTop: 20 }}
                            />
                            <Text> {" "}</Text>
                            <Text> {" "}</Text>
                            
                            <CustomButton
                                title="Sign In"
                                handlePress={submit}
                                containerStyles={{ marginTop: 30 }}
                                isLoading={isSubmitting}
                            />
                            <View style={{ justifyContent: 'center', paddingTop: 20, flexDirection: 'row', gap: 2 }}>
                                <Text style={{ fontSize: 18, color: '#CCCCCC', fontWeight: '400' }}>
                                    Don't have an Account?{' '}
                                    <Link href="/sign-up" style={{ fontSize: 20, fontWeight: '600', color: '#111111' }}>
                                        Sign Up
                                    </Link>
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <StatusBar backgroundColor='#FFFFFF' style='dark' />
            </SafeAreaView>
        </LinearGradient>
    );
};

export default SignIn;

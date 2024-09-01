import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';



const SignUp= () => {
    const [form, setForm] = useState({
        username:'',
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit =  () => {
        
    };

    return (
        <LinearGradient
            colors={['#FFFFFF', '#FD0000', '#FFFFFF', '#FD0000', '#FFFFFF', '#FFFFFF']} // Gradient colors
            locations={[0.4, 0.8, 1, 0.2, 0.3, 0.5]} // Color stop locations
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ height: '100%' }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', minHeight: '85vh', paddingHorizontal: 16 }}>
                        <View style={{ width: '100%', justifyContent: 'center', minHeight: '8vh', paddingHorizontal: 16, marginVertical: 24 }}>
                            <View style={{ position: 'relative', marginTop: 20 }}>
                                <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'left', color: '#FFFFFF' }}>
                                    <Text style={{ color: '#FD0000' }}>
                                        Blood KING
                                    </Text>
                                </Text>
                                <Image
                                    source={images.path}
                                    style={{ width: 350, height: 20, position: 'absolute', bottom: -8, right: -0.5 }}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={{ fontSize: 18, fontWeight: '800', textAlign: 'left', color: '#111111', marginTop: 20 }}>
                                 Welcome RV6 !!!
                            </Text>
                            <Image
                                source={images.logo}
                                style={{ maxWidth: 380, width: '100%', height: 180 }}
                                resizeMode="contain"
                            />

                                <Text> {" "}</Text>


                                <View
                                    style={{
                                        backgroundColor: '#ffecec',
                                        padding: 20,
                                        borderRadius: 20,
                                        alignItems: 'center',
                                        width: '100%',
                                    }}
                                >
        
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-around',
                                            width: '100%',
                                            marginVertical: 15,
                                        }}
                                    >
                                        

                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ff0000' }}>
                                                6
                                            </Text>

                                            <Text style={{ fontSize: 16, textAlign: 'center' }}>
                                                lives saved
                                            </Text>
                                        </View>

                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ff0000' }}>
                                                3600 ml
                                            </Text>
            
                                            <Text style={{ fontSize: 16, textAlign: 'center' }}>
                                                of blood
                                            </Text>
                                        </View>

                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ff0000' }}>
                                                8
                                            </Text>
            
                                            <Text style={{ fontSize: 16, textAlign: 'center' }}>
                                                donations
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                        <Text> {" "}</Text>  

                                <View
                                    style={{
                                        alignItems: 'center',
                                        marginVertical: 20,
                                        padding: 20,
                                        borderRadius: 30,
                                        backgroundColor: '#ffecec',
                                        width: '100%',
                                    }}
                                >
        
                                <Text style={{ fontSize: 20 }}>
                                    Next Donation
                                </Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
                                    15.06.2024
                                </Text>
                                    
                                    <View
                                        style={{
                                            width: '100%',
                                            height: 20,
                                            backgroundColor: '#ddd',
                                            borderRadius: 10,
                                            overflow: 'hidden',
                                            marginVertical: 10,
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: '70%', // Adjust this value according to the progress
                                                height: '100%',
                                                backgroundColor: '#ff0000',
                                            }}
                                        />
                                        </View>
        
                                        <Text style={{ fontSize: 16 }}>
                                            100 days
                                        </Text>
                                    </View>
                                </View>         
                            </View>
                        </ScrollView>
                <StatusBar backgroundColor='#FFFFFF' style='dark' />
            </SafeAreaView>
        </LinearGradient>
    );
}
export default SignUp

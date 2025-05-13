import React, { useState } from 'react'
import { Image, ImageBackground, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomTextInput from '@/components/shared/CustomTextInput';

export default function SignUpScreen() {
    return (
        <ImageBackground source={require('@/assets/images/auth/login-screen-img.png')} 
            style={{ flex: 1 }} resizeMode="cover">
            <View className="flex-row w-full px-[30px] justify-between items-center absolute top-[30px]">
                <TouchableOpacity className="flex-row">
                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                </TouchableOpacity>

                {/* Absolutely centered text */}
                <Text className="absolute left-0 right-0 text-center text-[20px] text-background-100">
                    Welcome
                </Text>
            </View>
            <View className="w-full h-[50%] rounded-t-[10px] bg-background-200 flex flex-col p-[30px] absolute bottom-[0px]">
                <ScrollView>
                    <Text className="text-text-200 text-[25px] font-semibold mb-[5px]">
                        Create Account
                    </Text>
                    <Text className="text-text-100 text-[15px] mb-[15px]">
                        Quickly create account
                    </Text>
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "example@example.com",
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        variant='email'
                        padding='25px'
                        marginBottom='5px'
                        hasIcon={true}
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "912 345 6789",
                            keyboardType: 'numeric',
                            maxLength: 10,
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        variant='mobile-number'
                        padding='25px'
                        marginBottom='5px'
                        hasIcon={true}
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "***************",
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        variant='password'
                        padding='25px'
                        marginBottom='15px'
                        hasIcon={true}
                    />
                    
                    <TouchableOpacity className="w-full bg-primary-300 py-[15px] rounded-[5px] flex flex-row items-center justify-center mb-[15px]">
                        <Text className="text-center text-background-100 text-[15px] font-semibold ml-[15px]">
                            Signup
                        </Text>
                    </TouchableOpacity>
                    <View className='w-full flex flex-row justify-center'>
                        <Text className='text-[15px] text-text-100 mr-[5px]'>
                            Already have an account?
                        </Text>
                        <TouchableOpacity 
                            // onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text className='text-[15px] text-text-200 font-semibold'>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

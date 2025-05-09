import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function WelcomeScreen() {
    return (
        <ImageBackground source={require('@/assets/images/auth/welcome-screen-img.png')} 
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
            <View className="w-full h-[40%] rounded-t-[10px] bg-background-200 flex flex-col p-[30px] absolute bottom-[0px]">
                <Text className="text-text-200 text-[25px] font-semibold mb-[5px]">
                    Welcome
                </Text>
                <Text className="text-text-100 text-[15px] mb-[15px]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                </Text>

                <TouchableOpacity className="w-full bg-background-100 py-[15px] rounded-[5px] flex flex-row items-center justify-center mb-[5px]">
                    <AntDesign name="google" size={24} color="#6CC51D" />
                    <Text className="text-center text-text-200 text-[15px] font-semibold ml-[15px]">
                        Continue with Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-full bg-primary-300 py-[15px] rounded-[5px] flex flex-row items-center justify-center mb-[15px]">
                    <FontAwesome name="user-circle-o" size={24} color="white" />
                    <Text className="text-center text-background-100 text-[15px] font-semibold ml-[15px]">
                        Create an Account
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
            </View>
        </ImageBackground>
    )
}

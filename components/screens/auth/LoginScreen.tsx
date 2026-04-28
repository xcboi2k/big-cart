import React, { useState } from 'react'
import {
    Image,
    ImageBackground,
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'

export default function LoginScreen() {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

    return (
        <ImageBackground
            source={require('@/assets/images/auth/login-screen-img.png')}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <View className="flex-row w-full px-[30px] justify-between items-center absolute top-[30px]">
                <TouchableOpacity className="flex-row">
                    <Ionicons
                        name="arrow-back-outline"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>

                {/* Absolutely centered text */}
                <Text className="absolute left-0 right-0 text-center text-[20px] text-background-100">
                    Welcome
                </Text>
            </View>
            <View className="w-full h-[50%] rounded-t-[10px] bg-background-200 flex flex-col p-[30px] absolute bottom-[0px]">
                <ScrollView>
                    <Text className="text-text-200 text-[25px] font-semibold mb-[5px]">
                        Welcome back!
                    </Text>
                    <Text className="text-text-100 text-[15px] mb-[15px]">
                        Sign in to your account
                    </Text>
                    <CustomTextInput
                        inputProps={{
                            placeholder: 'example@example.com',
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                        }}
                        variant="email"
                        padding="25px"
                        marginBottom="5px"
                        hasIcon={true}
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: '***************',
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                        }}
                        variant="password"
                        padding="25px"
                        marginBottom="5px"
                        hasIcon={true}
                    />
                    <View className="w-full flex flex-row justify-between items-center mb-[5px]">
                        <Switch
                            trackColor={{ false: '#767577', true: '#AEDC81' }}
                            thumbColor={isEnabled ? '#6CC51D' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <TouchableOpacity onPress={() => {}}>
                            <Text className="text-[12px] text-link">
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ButtonText title="Login" />
                    <View className="w-full flex flex-row justify-center">
                        <Text className="text-[15px] text-text-100 mr-[5px]">
                            Don't have an account?
                        </Text>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text className="text-[15px] text-text-200 font-semibold">
                                Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

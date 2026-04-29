import React from 'react'
import { Text, View } from 'react-native'

import Header from '@/components/shared/Header'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'

export default function ForgotPasswordScreen() {
    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header title="Password Recovery" hasBackground={false} />
            </View>

            <View className="w-full items-center mt-[15%] px-4">
                {/* Title */}
                <View className="w-full px-6 mb-6">
                    <Text className="text-2xl font-bold text-gray-900 mb-3 text-center">
                        Forgot Password
                    </Text>

                    <Text className="text-base text-gray-600 text-center">
                        Enter your email and we’ll send you a reset link
                    </Text>
                </View>

                {/* Input */}
                <View className="w-full mb-6">
                    <CustomTextInput
                        inputProps={{
                            placeholder: 'Email Address',
                            keyboardType: 'email-address',
                            autoCapitalize: 'none',
                        }}
                        variant="email"
                        padding="25px"
                        marginBottom="5px"
                        hasIcon={true}
                    />
                </View>

                {/* Button */}
                <ButtonText title="Send Link" />
            </View>
        </View>
    )
}

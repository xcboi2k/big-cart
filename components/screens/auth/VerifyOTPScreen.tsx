import React, { useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import Header from '@/components/shared/Header'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'
import OTPInput from '@/components/shared/OTPInput'

export default function VerifyOTPScreen() {
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ]
    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header title="Verify Number" hasBackground={false} />
            </View>

            <View className="w-full items-center mt-[15%] px-4">
                {/* Title */}
                <View className="w-full px-6 mb-6">
                    <Text className="text-2xl font-bold text-gray-900 mb-3 text-center">
                        Verify your number
                    </Text>

                    <Text className="text-base text-gray-600 text-center">
                        Enter you OTP code below
                    </Text>
                </View>

                {/* Input */}
                <View className="w-full mb-6">
                    <OTPInput inputRefs={inputRefs} />
                </View>

                {/* Button */}
                <ButtonText title="Next" />

                <View className="w-full flex-row justify-center items-center mb-5">
                    <Text className="text-[12px] text-gray-900 font-medium">
                        Didn't receive code?
                    </Text>

                    <TouchableOpacity onPress={() => {}}>
                        <Text className="text-[12px] text-primary-300 font-medium ml-1">
                            Resend a new code
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

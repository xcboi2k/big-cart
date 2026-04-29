import React from 'react'
import { Text, View } from 'react-native'

import Header from '@/components/shared/Header'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'

export default function VerifyNumberScreen() {
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
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy
                    </Text>
                </View>

                {/* Input */}
                <View className="w-full mb-6">
                    <CustomTextInput
                        inputProps={{
                            placeholder: '912 345 6789',
                            keyboardType: 'numeric',
                            maxLength: 10,
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                        }}
                        variant="mobile-number"
                        padding="25px"
                        marginBottom="5px"
                        hasIcon={true}
                    />
                </View>

                {/* Button */}
                <ButtonText title="Next" />

                <View className="w-full mt-3">
                    <Text className="text-base text-gray-600 text-center">
                        Resend confirmation code (1:23)
                    </Text>
                </View>
            </View>
        </View>
    )
}

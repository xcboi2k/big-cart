import React, { useState } from 'react'
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import Header from '@/components/shared/Header'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'

export default function AboutMeScreen() {
    return (
        <View className="flex-1 bg-background-200">
            <View className="items-center mt-10">
                <Header title="About Me" />
            </View>
            <ScrollView className="w-full px-4">
                <View className="w-full flex-col mb-6">
                    <Text className="text-lg font-bold text-gray-900 mb-2">
                        Personal Details
                    </Text>
                    <CustomTextInput
                        inputProps={{
                            placeholder: 'Name',
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                        }}
                        variant="name"
                        padding="25px"
                        marginBottom="5px"
                        hasIcon={true}
                    />
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
                <View className="w-full flex-col mb-6">
                    <Text className="text-lg font-bold text-gray-900 mb-2">
                        Change Password
                    </Text>
                    <CustomTextInput
                        inputProps={{
                            placeholder: 'Current password',
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                        }}
                        variant="password"
                        padding="25px"
                        marginBottom="15px"
                        hasIcon={true}
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: 'New password',
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                        }}
                        variant="password"
                        padding="25px"
                        marginBottom="15px"
                        hasIcon={true}
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: 'Confirm password',
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                        }}
                        variant="password"
                        padding="25px"
                        marginBottom="15px"
                        hasIcon={true}
                    />
                </View>
                <View className="mt-[20%] pb-2 px-4">
                    <ButtonText title="Save settings" />
                </View>
            </ScrollView>
        </View>
    )
}

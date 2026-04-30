import React, { useState } from 'react'
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'

import Header from '@/components/shared/Header'
import Stepper from '@/components/shared/order-process/Stepper'
import ButtonText from '@/components/shared/ButtonText'
import CustomTextInput from '@/components/shared/CustomTextInput'

export default function OrderShippingPaymentScreen() {
    const [toggleSaveCard, setToggleSaveCard] = useState(false)

    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header title="Shipping Address" />
            </View>
            <ScrollView className="w-full px-4">
                <View className="w-[80%] self-center flex-row justify-center items-center">
                    <Stepper currentStep={3} />
                </View>

                <View className="flex-row justify-between mb-6">
                    {[
                        { label: 'Paypal', icon: 'paypal' },
                        { label: 'Credit Card', icon: 'credit-card' },
                        { label: 'Apple pay', icon: 'apple' },
                    ].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            className="w-[30%] bg-white rounded-xl p-4 items-center shadow-sm"
                        >
                            <FontAwesome
                                name={item.icon}
                                size={22}
                                color="#9CA3AF"
                            />
                            <Text className="text-xs text-gray-500 mt-2">
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View className="rounded-2xl p-10 overflow-hidden bg-primary-300 mb-6">
                    {/* Decorative Circles */}
                    <View className="absolute right-[-20px] top-[-10px] w-20 h-20 bg-green-600/30 rounded-full" />
                    <View className="absolute right-[-10px] top-[40px] w-16 h-16 bg-green-700/30 rounded-full" />
                    <View className="absolute right-[10px] bottom-[-20px] w-24 h-24 bg-green-800/20 rounded-full" />

                    {/* Top Row */}
                    <View className="flex-row justify-between items-center mb-6">
                        <View className="flex-row">
                            <View className="w-8 h-8 bg-orange-400 rounded-full mr-[-10px]" />
                            <View className="w-8 h-8 bg-yellow-400 rounded-full" />
                        </View>

                        <Feather name="more-vertical" size={20} color="#fff" />
                    </View>

                    {/* Card Number */}
                    <Text className="text-white text-lg tracking-widest mb-6">
                        XXXX XXXX XXXX 8790
                    </Text>

                    {/* Bottom Info */}
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-white/70 text-[10px]">
                                CARD HOLDER
                            </Text>
                            <Text className="text-white font-bold text-sm">
                                RUSSELL AUSTIN
                            </Text>
                        </View>

                        <View>
                            <Text className="text-white/70 text-[10px]">
                                EXPIRES
                            </Text>
                            <Text className="text-white font-bold text-sm">
                                01/22
                            </Text>
                        </View>
                    </View>
                </View>

                <CustomTextInput
                    inputProps={{
                        placeholder: 'Name on card',
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
                        placeholder: 'Card number',
                        keyboardType: 'number-pad',
                        // onChangeText: formik.handleChange("email"),
                        // value: formik.values.email,
                        autoCapitalize: 'none',
                    }}
                    variant="card-number"
                    padding="25px"
                    marginBottom="5px"
                    hasIcon={true}
                />
                <View className="w-full flex-row items-center gap-3">
                    <View className="flex-1">
                        <CustomTextInput
                            inputProps={{
                                placeholder: 'Month / Year',
                                keyboardType: 'number-pad',
                                autoCapitalize: 'none',
                            }}
                            variant="calendar"
                            marginBottom="0px"
                            hasIcon={true}
                        />
                    </View>

                    <View className="flex-1">
                        <CustomTextInput
                            inputProps={{
                                placeholder: 'CVV',
                                keyboardType: 'number-pad',
                                autoCapitalize: 'none',
                            }}
                            variant="lock"
                            marginBottom="0px"
                            hasIcon={true}
                        />
                    </View>
                </View>
                <View className="w-full flex-row items-center">
                    <Switch
                        trackColor={{ false: '#767577', true: '#6CC51D' }}
                        thumbColor={'#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setToggleSaveCard((prev) => !prev)}
                        value={toggleSaveCard}
                        className="mr-2"
                    />
                    <Text>Save this card</Text>
                </View>

                <View className="mt-[20%] pb-2 px-4">
                    <ButtonText title="Make a payment" />
                </View>
            </ScrollView>
        </View>
    )
}

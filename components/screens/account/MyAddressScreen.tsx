import React, { useState } from 'react'
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'

import Header from '@/components/shared/Header'
import CustomTextInput from '@/components/shared/CustomTextInput'
import CustomDropdown from '@/components/shared/CustomDropdown'
import ButtonText from '@/components/shared/ButtonText'

export default function MyAddressScreen() {
    const countries = [
        { label: 'Philippines', value: 'PH' },
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'United Kingdom', value: 'GB' },
        { label: 'Australia', value: 'AU' },
        { label: 'Japan', value: 'JP' },
        { label: 'South Korea', value: 'KR' },
        { label: 'Singapore', value: 'SG' },
        { label: 'India', value: 'IN' },
        { label: 'Germany', value: 'DE' },
    ]
    const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
        ''
    )

    const [isDefault, setIsDefault] = useState(false)

    const [expandedId, setExpandedId] = useState<string | null>(null)

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id))
    }

    return (
        <View className="flex-1 bg-background-200">
            <View className="items-center mt-10">
                <Header
                    title="My Address"
                    onRightPress={() => console.log('add address')}
                    rightIcon="plus"
                />
            </View>
            <ScrollView className="w-full px-4">
                <View className="w-full bg-white p-4 mb-4">
                    <View className="flex-row items-start justify-between">
                        {/* LEFT */}
                        <View className="flex-row flex-1">
                            <View className="w-16 h-16 rounded-full bg-green-100 items-center justify-center mr-3">
                                <Ionicons
                                    name="location-outline"
                                    size={26}
                                    color="#22c55e"
                                />
                            </View>

                            <View className="flex-1">
                                <View className="flex-row items-center">
                                    <Text className="font-bold text-black text-lg mr-2">
                                        Test User
                                    </Text>

                                    {isDefault && (
                                        <View className="px-2 py-[2px] bg-green-100 rounded-full">
                                            <Text className="text-[10px] text-green-600 font-semibold">
                                                DEFAULT
                                            </Text>
                                        </View>
                                    )}
                                </View>

                                <Text className="text-xs text-gray-400">
                                    281 Crescent Day, LA Port
                                </Text>
                                <Text className="text-xs text-gray-400">
                                    California, United States 77571
                                </Text>
                                <Text className="text-sm text-black font-bold">
                                    +63 912 345 6789
                                </Text>
                            </View>
                        </View>

                        {/* RIGHT CHEVRON (clickable only) */}
                        <TouchableOpacity onPress={() => toggleExpand('1')}>
                            <Ionicons
                                name={
                                    expandedId === '1'
                                        ? 'chevron-up'
                                        : 'chevron-down'
                                }
                                size={22}
                                color="#6CC51D"
                            />
                        </TouchableOpacity>
                    </View>

                    <View className="w-full border-t border-gray-100 mt-2 mb-2" />
                    {/* ✅ COLLAPSIBLE CONTENT */}
                    {expandedId === '1' && (
                        <View>
                            <View className="space-y-3">
                                <CustomTextInput
                                    inputProps={{ placeholder: 'Name' }}
                                    variant="name"
                                    padding="25px"
                                    hasIcon
                                />

                                <CustomTextInput
                                    inputProps={{ placeholder: 'Address' }}
                                    variant="address"
                                    padding="25px"
                                    hasIcon
                                />

                                <View className="flex-row gap-3">
                                    <View className="flex-1">
                                        <CustomTextInput
                                            inputProps={{ placeholder: 'City' }}
                                            variant="city"
                                            padding="25px"
                                            hasIcon
                                        />
                                    </View>

                                    <View className="flex-1">
                                        <CustomTextInput
                                            inputProps={{
                                                placeholder: 'Zip Code',
                                            }}
                                            variant="zipcode"
                                            padding="25px"
                                            hasIcon
                                        />
                                    </View>
                                </View>

                                <CustomDropdown
                                    data={countries}
                                    selectedValue={selectedCountry}
                                    onValueChange={setSelectedCountry}
                                    variant="label-value"
                                    hasIcon
                                />

                                <CustomTextInput
                                    inputProps={{
                                        placeholder: 'Mobile Number',
                                    }}
                                    variant="mobile-number"
                                    padding="25px"
                                    hasIcon
                                />
                            </View>

                            {/* FOOTER */}
                            <View className="flex-row items-center mt-4">
                                <Switch
                                    trackColor={{
                                        false: '#767577',
                                        true: '#6CC51D',
                                    }}
                                    thumbColor="#f4f3f4"
                                    onValueChange={() =>
                                        setIsDefault((prev) => !prev)
                                    }
                                    value={isDefault}
                                    className="mr-2"
                                />
                                <Text>Make default</Text>
                            </View>
                        </View>
                    )}
                </View>

                <View className="mt-[20%] pb-2 px-4">
                    <ButtonText title="Save settings" />
                </View>
            </ScrollView>
        </View>
    )
}

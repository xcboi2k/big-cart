import React, { useState } from 'react'
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'

import Header from '@/components/shared/Header'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'

export default function MyCardsScreen() {
    const cards = [
        {
            id: '1',
            brand: 'Master Card',
            last4: '1234',
            exp: '12/28',
            cvv: '123',
            isDefault: true,
        },
        {
            id: '2',
            brand: 'Visa',
            last4: '5678',
            exp: '11/27',
            cvv: '456',
            isDefault: false,
        },
        {
            id: '3',
            brand: 'American Express',
            last4: '9012',
            exp: '10/26',
            cvv: '789',
            isDefault: false,
        },
    ]

    const [expandedId, setExpandedId] = useState<string | null>(null)

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id))
    }

    return (
        <View className="flex-1 bg-background-200">
            <View className="items-center mt-10">
                <Header
                    title="My Cards"
                    onRightPress={() => console.log('add card')}
                    rightIcon="plus"
                />
            </View>
            <ScrollView className="w-full px-4">
                {cards.map((card) => (
                    <View
                        key={card.id}
                        className="bg-white p-4 mb-4 rounded-xl"
                    >
                        {card.isDefault && (
                            <View className="px-2 py-[2px] bg-green-100 rounded-full mb-4 w-[15%]">
                                <Text className="text-[10px] text-green-600 font-semibold text-center">
                                    DEFAULT
                                </Text>
                            </View>
                        )}
                        {/* HEADER */}
                        <View className="flex-row items-start justify-between">
                            <View className="flex-row flex-1">
                                <View className="w-16 h-16 rounded-full bg-green-100 items-center justify-center mr-3">
                                    <FontAwesome
                                        name="credit-card"
                                        size={26}
                                        color="#22c55e"
                                    />
                                </View>

                                <View className="flex-1">
                                    <View className="flex-row items-center">
                                        <Text className="font-bold text-black text-lg mr-2">
                                            {card.brand}
                                        </Text>
                                    </View>

                                    <Text className="text-xs text-gray-400">
                                        XXXX XXXX XXXX {card.last4}
                                    </Text>

                                    <View className="flex-row mt-1">
                                        <Text className="text-sm text-black font-bold mr-4">
                                            Exp: {card.exp}
                                        </Text>
                                        <Text className="text-sm text-black font-bold">
                                            CVV: {card.cvv}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* CHEVRON */}
                            <TouchableOpacity
                                onPress={() => toggleExpand(card.id)}
                            >
                                <Ionicons
                                    name={
                                        expandedId === card.id
                                            ? 'chevron-up'
                                            : 'chevron-down'
                                    }
                                    size={22}
                                    color="#6CC51D"
                                />
                            </TouchableOpacity>
                        </View>

                        <View className="w-full border-t border-gray-100 mt-2 mb-2" />

                        {/* COLLAPSIBLE */}
                        {expandedId === card.id && (
                            <View>
                                <CustomTextInput
                                    inputProps={{ placeholder: 'Name on card' }}
                                    variant="name"
                                    padding="25px"
                                    hasIcon
                                />

                                <CustomTextInput
                                    inputProps={{
                                        placeholder: 'Card number',
                                        keyboardType: 'number-pad',
                                    }}
                                    variant="card-number"
                                    padding="25px"
                                    hasIcon
                                />

                                <View className="flex-row gap-3">
                                    <View className="flex-1">
                                        <CustomTextInput
                                            inputProps={{
                                                placeholder: 'Month / Year',
                                                keyboardType: 'number-pad',
                                            }}
                                            variant="calendar"
                                            hasIcon
                                        />
                                    </View>

                                    <View className="flex-1">
                                        <CustomTextInput
                                            inputProps={{
                                                placeholder: 'CVV',
                                                keyboardType: 'number-pad',
                                            }}
                                            variant="lock"
                                            hasIcon
                                        />
                                    </View>
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
                                            setIsDefault(card.id)
                                        }
                                        value={card.isDefault}
                                        className="mr-2"
                                    />
                                    <Text>Make default</Text>
                                </View>
                            </View>
                        )}
                    </View>
                ))}

                <View className="mt-[20%] pb-2 px-4">
                    <ButtonText title="Save settings" />
                </View>
            </ScrollView>
        </View>
    )
}

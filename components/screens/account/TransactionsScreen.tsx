import { Feather, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import Header from '@/components/shared/Header'
import { formatPeso } from '@/utils/formatCurrency'

export default function TransactionsScreen() {
    const transactions = [
        {
            id: 1,
            cardType: 'Visa',
            last4: '1234',
            datetime: 'May 01, 2026 at 10:45 AM',
            amount: 1250,
        },
        {
            id: 2,
            cardType: 'Mastercard',
            last4: '5678',
            datetime: 'Apr 30, 2026 at 03:20 PM',
            amount: 560,
        },
        {
            id: 3,
            cardType: 'Amex',
            last4: '9012',
            datetime: 'Apr 29, 2026 at 08:10 PM',
            amount: 3200,
        },
    ]
    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header title="Transactions" />
            </View>

            <ScrollView className="w-full px-4">
                {transactions.map((item) => (
                    <View
                        key={item.id}
                        className="bg-white py-4 px-5 mb-3 flex-row items-center justify-between"
                    >
                        {/* LEFT SIDE */}
                        <View className="flex-row items-center flex-1">
                            {/* CARD ICON */}
                            <View className="w-16 h-16 rounded-full bg-green-100 items-center justify-center mr-4">
                                <FontAwesome
                                    name="credit-card"
                                    size={20}
                                    color="#22c55e"
                                />
                            </View>

                            {/* INFO */}
                            <View className="flex-1">
                                <Text className="text-lg font-bold text-gray-900">
                                    {item.cardType} •••• {item.last4}
                                </Text>

                                <Text className="text-sm text-gray-500 mt-1">
                                    {item.datetime}
                                </Text>
                            </View>
                        </View>

                        {/* RIGHT SIDE (AMOUNT) */}
                        <Text className="text-base font-bold text-primary-300">
                            {formatPeso(item.amount)}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

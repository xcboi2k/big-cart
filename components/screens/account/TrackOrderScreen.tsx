import React, { useState } from 'react'
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import Header from '@/components/shared/Header'
import { formatPeso } from '@/utils/formatCurrency'

export default function TrackOrderScreen() {
    const steps = [
        {
            title: 'Order Placed',
            date: 'October 21 2021',
            done: true,
            icon: 'package',
        },
        {
            title: 'Order Confirmed',
            date: 'October 21 2021',
            done: true,
            icon: 'check-circle',
        },
        {
            title: 'Order Shipped',
            date: 'October 21 2021',
            done: true,
            icon: 'truck',
        },
        {
            title: 'Out for Delivery',
            date: 'Pending',
            done: false,
            icon: 'truck',
        },
        {
            title: 'Order Delivered',
            date: 'Pending',
            done: false,
            icon: 'home',
        },
    ]

    return (
        <View className="flex-1 bg-background-200">
            <View className="items-center mt-10">
                <Header title="Track Order" />
            </View>
            <ScrollView className="w-full px-4">
                <View className="bg-white p-4 mb-4">
                    <View className="flex-row flex-1">
                        <View className="w-16 h-16 rounded-full bg-green-100 items-center justify-center mr-3">
                            <Feather name="package" size={26} color="#22c55e" />
                        </View>

                        <View className="flex-1">
                            <View className="flex-row items-center">
                                <Text className="font-bold text-black text-lg mr-2">
                                    Order #12345
                                </Text>
                            </View>

                            <Text className="text-xs text-gray-400">
                                Placed on Octobar 19 2021
                            </Text>

                            <View className="flex-row mt-1">
                                <Text className="text-sm text-black font-bold mr-4">
                                    Items: 10
                                </Text>
                                <Text className="text-sm text-black font-bold">
                                    Amount: {formatPeso(500)}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="bg-white p-4 mb-4">
                    {steps.map((step, index) => {
                        const isLast = index === steps.length - 1

                        return (
                            <View
                                key={index}
                                className="relative flex-row items-center mb-8"
                            >
                                {/* VERTICAL LINE (background spine) */}
                                {!isLast && (
                                    <View className="absolute left-8 top-12 w-[2px] h-full bg-gray-300" />
                                )}

                                {/* ROW CONTENT */}
                                <View className="flex-row items-center w-full">
                                    {/* CIRCLE */}
                                    <View
                                        className={`w-16 h-16 rounded-full items-center justify-center mr-4
                        ${step.done ? 'bg-green-100' : 'bg-gray-200'}`}
                                    >
                                        <Feather
                                            name={step.icon}
                                            size={24}
                                            color={
                                                step.done
                                                    ? '#22C55E'
                                                    : '#9CA3AF'
                                            }
                                        />
                                    </View>

                                    {/* CONTENT */}
                                    <View className="flex-1 border-b border-gray-300">
                                        <Text className="text-base font-semibold text-gray-900">
                                            {step.title}
                                        </Text>

                                        <Text className="text-xs text-gray-400 mt-1 mb-2">
                                            {step.date}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

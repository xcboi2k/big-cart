import React, { useState } from 'react'
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import Header from '@/components/shared/Header'
import { formatPeso } from '@/utils/formatCurrency'

export default function MyOrderScreen() {
    const orders = [
        {
            id: '1',
            orderNumber: '12345',
            placedAt: 'October 19 2021',
            items: 10,
            amount: 500,
            steps: [
                { title: 'Order placed', date: 'Oct 19 2021', done: true },
                { title: 'Order confirmed', date: 'Oct 20 2021', done: true },
                { title: 'Order shipped', date: 'Oct 20 2021', done: true },
                { title: 'Out for delivery', date: 'Pending', done: false },
                { title: 'Order delivered', date: 'Pending', done: false },
            ],
        },
        {
            id: '2',
            orderNumber: '67890',
            placedAt: 'October 18 2021',
            items: 3,
            amount: 1200,
            steps: [
                { title: 'Order placed', date: 'Oct 18 2021', done: true },
                { title: 'Order confirmed', date: 'Oct 18 2021', done: true },
                { title: 'Order shipped', date: 'Oct 19 2021', done: false },
                { title: 'Out for delivery', date: 'Pending', done: false },
                { title: 'Order delivered', date: 'Pending', done: false },
            ],
        },
        {
            id: '3',
            orderNumber: '54321',
            placedAt: 'October 17 2021',
            items: 6,
            amount: 850,
            steps: [
                { title: 'Order placed', date: 'Oct 17 2021', done: true },
                { title: 'Order confirmed', date: 'Oct 17 2021', done: true },
                { title: 'Order shipped', date: 'Oct 18 2021', done: true },
                { title: 'Out for delivery', date: 'Oct 19 2021', done: true },
                { title: 'Order delivered', date: 'Oct 20 2021', done: true },
            ],
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
                    title="My Order"
                    rightIcon="sliders"
                    onRightPress={() => {}}
                />
            </View>
            <ScrollView className="w-full px-4">
                {orders.map((order) => (
                    <View key={order.id} className="bg-white p-4 mb-4">
                        {/* HEADER */}
                        <View className="flex-row items-center justify-between">
                            {/* LEFT */}
                            <View className="flex-row flex-1">
                                <View className="w-16 h-16 rounded-full bg-green-100 items-center justify-center mr-3">
                                    <Feather
                                        name="package"
                                        size={26}
                                        color="#22c55e"
                                    />
                                </View>

                                <View className="flex-1">
                                    <Text className="font-bold text-black text-lg">
                                        Order #{order.orderNumber}
                                    </Text>

                                    <Text className="text-xs text-gray-400 mt-1">
                                        Placed on {order.placedAt}
                                    </Text>

                                    <View className="flex-row mt-1">
                                        <Text className="text-sm text-black font-bold mr-4">
                                            Items: {order.items}
                                        </Text>
                                        <Text className="text-sm text-black font-bold">
                                            Amount: {formatPeso(order.amount)}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* CHEVRON */}
                            <TouchableOpacity
                                onPress={() => toggleExpand(order.id)}
                            >
                                <Ionicons
                                    name={
                                        expandedId === order.id
                                            ? 'chevron-up'
                                            : 'chevron-down'
                                    }
                                    size={22}
                                    color="#6CC51D"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* DIVIDER */}
                        <View className="w-full border-t border-gray-100 mt-3 mb-2" />

                        {/* COLLAPSIBLE */}
                        {expandedId === order.id && (
                            <View className="mt-2">
                                {order.steps.map((step, index) => {
                                    const isLast =
                                        index === order.steps.length - 1

                                    return (
                                        <View
                                            key={index}
                                            className="relative flex-row items-center mb-8"
                                        >
                                            {/* VERTICAL LINE (centered to circle) */}
                                            {!isLast && (
                                                <View className="absolute left-2 top-6 bottom-[-38px] w-[1px] bg-gray-300" />
                                            )}

                                            {/* ROW */}
                                            <View className="flex-row items-center w-full">
                                                {/* CIRCLE */}
                                                <View
                                                    className={`w-4 h-4 rounded-full items-center justify-center mr-4
                                                    ${step.done ? 'bg-primary-300' : 'bg-gray-200'}`}
                                                ></View>

                                                {/* CONTENT */}
                                                <View className="flex-1 flex-row justify-between items-center">
                                                    <Text className="text-base font-semibold text-gray-900">
                                                        {step.title}
                                                    </Text>

                                                    <Text className="text-xs text-gray-400">
                                                        {step.date}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

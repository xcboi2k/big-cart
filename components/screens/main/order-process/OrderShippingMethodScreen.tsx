import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import Header from '@/components/shared/Header'
import Stepper from '@/components/shared/order-process/Stepper'
import { formatPeso } from '@/utils/formatCurrency'
import ButtonText from '@/components/shared/ButtonText'

export default function OrderShippingMethodScreen() {
    const deliveryOptions = [
        {
            id: 1,
            deliveryType: 'Standard Delivery',
            deliveryInfo:
                'Order will be delivered between 3 - 4 business days straights to your doorstep.',
            price: 3,
        },
        {
            id: 2,
            deliveryType: 'Next Day Delivery',
            deliveryInfo:
                'Order will be delivered between 3 - 4 business days straights to your doorstep.',
            price: 5,
        },
        {
            id: 3,
            deliveryType: 'Nominated Delivery',
            deliveryInfo:
                'Order will be delivered between 3 - 4 business days straights to your doorstep.',
            price: 3,
        },
    ]
    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header title="Shipping Method" />
            </View>

            <ScrollView className="w-full px-4">
                <View className="w-[80%] self-center flex-row justify-center items-center">
                    <Stepper currentStep={1} />
                </View>

                {deliveryOptions.map((item, index) => (
                    <View
                        className="bg-white py-4 px-6 mb-3 flex-col"
                        key={index}
                    >
                        <View className="flex-row justify-between items-center py-1 px-2 mb-2">
                            <View className="w-[80%] flex-col">
                                <Text className="text-lg font-bold text-gray-900 mb-2">
                                    {item.deliveryType}
                                </Text>
                                <Text className="text-sm text-gray-700">
                                    {item.deliveryInfo}
                                </Text>
                            </View>

                            <View className="items-end justify-between">
                                <Text className="text-sm text-primary-300">
                                    {formatPeso(item.price)}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}

                <View className="mt-[20%] pb-2 px-4">
                    <ButtonText title="Next" />
                </View>
            </ScrollView>
        </View>
    )
}

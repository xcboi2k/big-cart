import React from 'react'
import { Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import Header from '@/components/shared/Header'
import ButtonText from '@/components/shared/ButtonText'

export default function OrderStatusScreen() {
    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header title="Order Success" />
            </View>

            <View className="w-full flex-1 items-center justify-center px-4">
                <FontAwesome name="shopping-bag" size={100} color="#6CC51D" />
                {/* Title */}
                <View className="w-full px-6 mt-6 mb-6">
                    <Text className="text-2xl font-bold text-gray-900 mb-3 text-center">
                        Your order was successful!
                    </Text>

                    <Text className="text-base text-gray-600 text-center">
                        You will get a response within a few minutes.
                    </Text>
                </View>
            </View>

            <View className="mt-[20%] pb-2 px-4">
                <ButtonText title="Track Order" />
            </View>
        </View>
    )
}

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { formatPeso } from '@/utils/formatCurrency'
type Props = {
    name: string
    price: number
    weight: string
}

export default function FavoritesItem({ name, price, weight }: Props) {
    return (
        <View className="bg-white py-4 px-6 mb-3 flex-row items-center">
            {/* LEFT ICON */}
            <View className="w-14 h-14 rounded-full bg-green-100 items-center justify-center mr-4">
                <FontAwesome name="leaf" size={24} color="#22C55E" />
            </View>

            {/* INFO */}
            <View className="flex-1">
                <Text className="text-sm text-primary-300">
                    {formatPeso(price)}
                </Text>

                <Text className="text-lg font-bold text-gray-900">{name}</Text>

                <Text className="text-sm text-gray-400">{weight}</Text>
            </View>
        </View>
    )
}

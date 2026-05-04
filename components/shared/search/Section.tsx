import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Chip from './Chip'

export default function Section({
    title,
    data,
}: {
    title: string
    data: string[]
}) {
    return (
        <View className="mt-4">
            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-sm font-semibold text-gray-900">
                    {title}
                </Text>

                <TouchableOpacity>
                    <Text className="text-xs text-blue-500">clear</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row flex-wrap">
                {data.map((item, index) => (
                    <Chip key={index} label={item} />
                ))}
            </View>
        </View>
    )
}

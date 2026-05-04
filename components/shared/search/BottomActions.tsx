import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function BottomActions() {
    return (
        <View className="absolute bottom-6 w-full px-4 flex-row justify-between">
            <TouchableOpacity className="flex-1 bg-white py-3 mr-2 items-center border border-gray-200">
                <Feather name="image" size={18} color="#6B7280" />
                <Text className="text-xs text-gray-500 mt-1">Image Search</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-white py-3 ml-2 items-center border border-gray-200">
                <Feather name="mic" size={18} color="#6B7280" />
                <Text className="text-xs text-gray-500 mt-1">Voice Search</Text>
            </TouchableOpacity>
        </View>
    )
}

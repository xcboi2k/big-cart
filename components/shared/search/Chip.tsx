import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function Chip({ label }: { label: string }) {
    return (
        <TouchableOpacity className="bg-white px-3 py-1 mr-2 mb-2">
            <Text className="text-xs text-gray-600">{label}</Text>
        </TouchableOpacity>
    )
}

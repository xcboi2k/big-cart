import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function ButtonText({ title }) {
    return (
        <TouchableOpacity className="w-full bg-primary-300 py-[15px] rounded-[5px] flex flex-row items-center justify-center mb-[15px]">
            <Text className="text-center text-background-100 text-xl font-semibold">
                {title}
            </Text>
        </TouchableOpacity>
    )
}

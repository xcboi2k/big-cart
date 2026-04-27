import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '@/components/shared/Header'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function CategoriesScreen() {
    const categories = [
        { id: 1, name: 'Groceries', icon: 'shopping-basket', color: '#22C55E' },
        { id: 2, name: 'Fruits', icon: 'apple', color: '#F97316' },
        { id: 3, name: 'Vegetables', icon: 'leaf', color: '#16A34A' },
        { id: 4, name: 'Drinks', icon: 'coffee', color: '#3B82F6' },
        { id: 5, name: 'Meat', icon: 'cutlery', color: '#EF4444' },
        { id: 6, name: 'Seafood', icon: 'anchor', color: '#06B6D4' },
        { id: 7, name: 'Snacks', icon: 'birthday-cake', color: '#F59E0B' },
        { id: 8, name: 'Frozen', icon: 'snowflake-o', color: '#60A5FA' },
        { id: 9, name: 'Dairy', icon: 'tint', color: '#A78BFA' },
    ]

    const hexToLight = (hex: string) => {
        return hex + '20' // adds transparency (soft tint)
    }

    return (
        <View className="flex-1 items-center pb-5 mt-10 bg-background-200">
            <Header
                title="Categories"
                rightIcon="sliders"
                onRightPress={() => {}}
            />
            <ScrollView className="w-full">
                <View className="flex-row flex-wrap justify-between px-4">
                    {categories.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            className="w-[31%] aspect-square bg-white border border-gray-100 p-3 mb-4 items-center justify-center rounded-2xl"
                            activeOpacity={0.8}
                        >
                            {/* ICON CIRCLE */}
                            <View
                                className="w-12 h-12 rounded-full items-center justify-center mb-2"
                                style={{
                                    backgroundColor: hexToLight(item.color),
                                }}
                            >
                                <FontAwesome
                                    name={item.icon}
                                    size={18}
                                    color={item.color}
                                />
                            </View>

                            {/* NAME */}
                            <Text
                                className="text-xs font-semibold text-gray-800 text-center"
                                numberOfLines={1}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

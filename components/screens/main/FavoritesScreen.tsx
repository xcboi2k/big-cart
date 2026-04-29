import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Header from '@/components/shared/Header'
import FavoritesItem from '@/components/shared/favorites/FavoritesItem'

export default function FavoritesScreen() {
    const favoritesData = [
        {
            id: 1,
            name: 'Fresh Broccoli',
            price: 22.22,
            weight: '1.50 lbs',
        },
        {
            id: 2,
            name: 'Black Grapes',
            price: 22.22,
            weight: '5.0 lbs',
        },
        {
            id: 3,
            name: 'Carrots',
            price: 18.5,
            weight: '1.0 kg',
        },
        {
            id: 4,
            name: 'Tomatoes',
            price: 30,
            weight: '1.2 kg',
        },
        {
            id: 5,
            name: 'Spinach',
            price: 12,
            weight: 'per bundle',
        },
    ]
    return (
        <View className="flex-1 items-center pb-5 mt-10 bg-background-200">
            <Header title="Favorites" />
            <ScrollView className="w-full px-4">
                {favoritesData.map((item) => (
                    <FavoritesItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        weight={item.weight}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

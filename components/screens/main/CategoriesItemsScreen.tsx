import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import Header from '@/components/shared/Header'
import { formatPeso } from '@/utils/formatCurrency'

export default function CategoriesItemsScreen() {
    const products = [
        {
            id: 1,
            name: 'Carrot',
            price: 80,
            unit: 'per kg',
            isNew: true,
            sale: 10,
        },
        {
            id: 2,
            name: 'Potato',
            price: 60,
            unit: 'per kg',
            isNew: false,
            sale: 5,
        },
        {
            id: 3,
            name: 'Onion',
            price: 70,
            unit: 'per kg',
            isNew: true,
            sale: 0,
        },
        {
            id: 4,
            name: 'Tomato',
            price: 90,
            unit: 'per kg',
            isNew: false,
            sale: 15,
        },
        {
            id: 5,
            name: 'Cabbage',
            price: 50,
            unit: 'per piece',
            isNew: true,
            sale: 0,
        },
        {
            id: 6,
            name: 'Broccoli',
            price: 120,
            unit: 'per kg',
            isNew: false,
            sale: 5,
        },
        {
            id: 7,
            name: 'Spinach',
            price: 40,
            unit: 'per bundle',
            isNew: false,
            sale: 10,
        },
        {
            id: 8,
            name: 'Garlic',
            price: 150,
            unit: 'per kg',
            isNew: true,
            sale: 0,
        },
        {
            id: 9,
            name: 'Ginger',
            price: 130,
            unit: 'per kg',
            isNew: false,
            sale: 8,
        },
        {
            id: 10,
            name: 'Bell Pepper',
            price: 160,
            unit: 'per kg',
            isNew: true,
            sale: 12,
        },
    ]

    const [cart, setCart] = useState({
        1: 2,
        3: 1,
        5: 4,
    })
    const [favorites, setFavorites] = useState({
        2: true,
        4: true,
        7: true,
    })

    const toggleFavorite = (id) => {
        setFavorites((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    const addToCart = (id) => {
        setCart((prev) => ({ ...prev, [id]: 1 }))
    }

    const updateQty = (id, type) => {
        setCart((prev) => {
            const current = prev[id] || 0

            if (type === 'add') {
                return { ...prev, [id]: current + 1 }
            }

            if (type === 'minus') {
                if (current <= 1) {
                    const updated = { ...prev }
                    delete updated[id]
                    return updated
                }
                return { ...prev, [id]: current - 1 }
            }

            return prev
        })
    }

    return (
        <View className="flex-1 items-center pb-5 mt-10 bg-background-200">
            <Header
                title="Vegetables"
                rightIcon="sliders"
                onRightPress={() => {}}
            />
            <ScrollView className="w-full">
                <View className="flex-row flex-wrap justify-between px-4">
                    {products.map((item) => {
                        const inCart = (cart?.[item.id] ?? 0) > 0
                        const qty = cart?.[item.id]

                        return (
                            <View
                                key={item.id}
                                className="w-[48%] bg-white rounded-2xl p-3 mb-4 border border-gray-100"
                            >
                                {/* Top row */}
                                <View className="flex-row justify-between items-center">
                                    {/* Badges */}
                                    <View className="flex-row">
                                        {item.isNew && (
                                            <View className="bg-green-500 px-2 py-0.5 rounded-full mr-1">
                                                <Text className="text-white text-[10px]">
                                                    New
                                                </Text>
                                            </View>
                                        )}

                                        {item.sale > 0 && (
                                            <View className="bg-red-500 px-2 py-0.5 rounded-full">
                                                <Text className="text-white text-[10px]">
                                                    -{item.sale}%
                                                </Text>
                                            </View>
                                        )}
                                    </View>

                                    {/* Heart */}
                                    <TouchableOpacity
                                        onPress={() => toggleFavorite(item.id)}
                                    >
                                        <FontAwesome
                                            name={
                                                favorites?.[item.id]
                                                    ? 'heart'
                                                    : 'heart-o'
                                            }
                                            size={16}
                                            color={
                                                favorites?.[item.id]
                                                    ? 'red'
                                                    : '#9CA3AF'
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View className="items-center justify-center bg-white rounded-2xl p-4">
                                    {/* ICON (centered hero element) */}
                                    <View className="w-20 h-20 rounded-full bg-primary-100/10 items-center justify-center mb-3">
                                        <FontAwesome
                                            name="cube"
                                            size={30}
                                            color="#153A56"
                                        />
                                    </View>

                                    {/* Price */}
                                    <Text className="text-primary-200 font-bold text-md mb-1 text-center">
                                        {formatPeso(item.price)}
                                    </Text>

                                    {/* Name */}
                                    <Text className="text-xl font-bold mb-1 text-center">
                                        {item.name}
                                    </Text>

                                    {/* Unit */}
                                    <Text className="text-gray-400 text-sm text-center">
                                        {item.unit}
                                    </Text>
                                </View>

                                <View className="w-full border-t border-gray-100 mt-3 mb-2" />
                                {/* Cart */}
                                {!inCart ? (
                                    <TouchableOpacity
                                        onPress={() => addToCart(item.id)}
                                        className="flex-row items-center justify-center py-2"
                                    >
                                        {/* Icon */}
                                        <FontAwesome
                                            name="shopping-bag"
                                            size={16}
                                            color="#6CC51D"
                                        />

                                        {/* Text */}
                                        <Text className="text-black font-bold text-sm ml-2">
                                            Add to Cart
                                        </Text>
                                    </TouchableOpacity>
                                ) : (
                                    <View className="flex-row items-center justify-between bg-gray-100 rounded-xl px-2 py-1">
                                        <TouchableOpacity
                                            onPress={() =>
                                                updateQty(item.id, 'minus')
                                            }
                                        >
                                            <Text className="text-lg font-bold">
                                                -
                                            </Text>
                                        </TouchableOpacity>

                                        <Text className="font-bold">{qty}</Text>

                                        <TouchableOpacity
                                            onPress={() =>
                                                updateQty(item.id, 'add')
                                            }
                                        >
                                            <Text className="text-lg font-bold">
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

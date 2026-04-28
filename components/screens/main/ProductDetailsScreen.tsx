import React, { useState } from 'react'
import {
    ScrollView,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import Header from '@/components/shared/Header'
import { formatPeso } from '@/utils/formatCurrency'

export default function ProductDetailsScreen() {
    const { width } = useWindowDimensions()
    const size = width * 0.4 // 40% of screen width

    const [favorite, setFavorite] = useState(false)
    return (
        <View className="flex-1 items-center pb-5 mt-10 bg-background-100">
            {/* BACKGROUND SHAPE */}
            <View className="absolute top-0 w-full items-center">
                <View className="w-[140%] h-[350px] bg-primary-100 rounded-b-[1000px]" />
            </View>

            {/* HEADER */}
            <Header hasBackground={false} />

            {/* HERO */}
            <View className="items-center justify-center p-4 mt-6">
                <View className="bg-red items-center justify-center mb-3">
                    <FontAwesome
                        name="cube"
                        size={325} // icon scales with circle
                        color="#153A56"
                    />
                </View>
            </View>

            <View className="w-full h-[50%] rounded-t-[10px] bg-[#F4F5F9] flex flex-col p-[30px] absolute bottom-[0px]">
                <ScrollView>
                    <View className="flex-row justify-between items-center">
                        <Text className="text-primary-300 font-bold text-xl mb-1 text-center">
                            {formatPeso(100)}
                        </Text>

                        {/* Heart */}
                        <TouchableOpacity onPress={() => setFavorite(true)}>
                            <FontAwesome
                                name={favorite ? 'heart' : 'heart-o'}
                                size={18}
                                color={favorite ? 'red' : '#9CA3AF'}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Title */}
                    <Text className="text-2xl font-bold text-gray-900">
                        Organic Lemons
                    </Text>

                    {/* Weight */}
                    <Text className="text-md text-gray-400 mt-1">1.50 lbs</Text>

                    {/* Rating */}
                    <View className="flex-row items-center mt-1">
                        <Text className="text-md font-semibold text-gray-800 mr-1">
                            4.5
                        </Text>

                        {/* Stars */}
                        <View className="flex-row">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <FontAwesome
                                    key={i}
                                    name="star"
                                    size={12}
                                    color="#FACC15"
                                />
                            ))}
                        </View>

                        <Text className="text-md text-gray-400 ml-1">
                            (89 reviews)
                        </Text>
                    </View>

                    {/* Description */}
                    <Text className="text-lg text-gray-400 mt-3 leading-5">
                        Organic Mountain works as a seller for many organic
                        growers of organic lemons. Organic lemons are easy to
                        spot in your produce aisle. They are just like regular
                        lemons, but they will usually have a few more scars on
                        the outside of the lemon skin. Organic lemons are
                        considered to be the world's finest lemon for juicing
                        <Text className="text-black font-semibold"> more</Text>
                    </Text>

                    {/* Quantity Selector */}
                    <View className="flex-row items-center justify-between bg-background-100 rounded-xl py-3 px-6 mt-4">
                        <Text className="text-md text-gray-500">Quantity</Text>

                        <View className="flex-row items-center">
                            {/* Minus */}
                            <TouchableOpacity className="px-2">
                                <Text className="text-green-500 text-lg font-bold">
                                    -
                                </Text>
                            </TouchableOpacity>

                            {/* Value */}
                            <View className="mx-3 px-3 py-1 border-l border-r border-gray-200">
                                <Text className="font-bold text-gray-900 text-lg text-center">
                                    3
                                </Text>
                            </View>

                            {/* Plus */}
                            <TouchableOpacity className="px-2">
                                <Text className="text-green-500 text-lg font-bold">
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Add to Cart */}
                    <TouchableOpacity className="mt-4 bg-primary-200 rounded-xl py-4 justify-center items-center relative">
                        {/* CENTER TEXT */}
                        <Text className="text-white font-semibold text-xl text-center">
                            Add to cart
                        </Text>

                        {/* RIGHT ICON */}
                        <View className="absolute right-4">
                            <FontAwesome
                                name="shopping-bag"
                                size={18}
                                color="#fff"
                            />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

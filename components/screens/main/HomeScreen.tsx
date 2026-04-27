import React from 'react'
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import CategoriesDisplay from '@/components/shared/home/CategoriesDisplay'
import FeaturedProducts from '@/components/shared/home/FeaturedProducts'

export default function HomeScreen() {
    return (
        <View className="flex-1 items-center pb-5 mt-10">
            <ScrollView className="w-[92%] mt-4">
                <View className="w-full flex flex-row items-center mb-[10px]">
                    <View className="flex-row items-center bg-gray-200 rounded-[20px] px-[10px] py-[5px]">
                        {/* Search icon */}
                        <FontAwesome name="search" size={18} color="#6B7280" />

                        {/* Input */}
                        <TextInput
                            placeholder="Search..."
                            className="flex-1 ml-2 text-black text-sm"
                            placeholderTextColor="#6B7280"
                        />

                        {/* Filter button */}
                        <TouchableOpacity
                            onPress={() => console.log('Filter pressed')}
                            className="ml-2 p-2"
                        >
                            <FontAwesome
                                name="sliders"
                                size={18}
                                color="#6B7280"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <CategoriesDisplay />
                <FeaturedProducts />
            </ScrollView>
        </View>
    )
}

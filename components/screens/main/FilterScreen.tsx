import React from 'react'
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import Header from '@/components/shared/Header'

export default function FilterScreen() {
    return (
        <View className="flex-1 items-center pb-5 mt-10 bg-background-200">
            <Header
                title="Apply Filters"
                onRightPress={() => {}}
                rightIcon="undo"
            />
            <ScrollView className="w-full px-4">
                <View className="bg-white py-4 px-6 mb-3 flex-col">
                    <Text className="text-lg font-bold text-gray-900 mb-2">
                        Price Range
                    </Text>
                    <View className="flex-row justify-between items-center">
                        <TextInput
                            placeholder="Min."
                            className="w-[48%] px-4 bg-gray-100 rounded-md"
                        />
                        <TextInput
                            placeholder="Max."
                            className="w-[48%] px-4 bg-gray-100 rounded-md"
                        />
                    </View>
                </View>
                <View className="bg-white py-4 px-6 mb-3 flex-col">
                    <Text className="text-lg font-bold text-gray-900 mb-2">
                        Star Rating
                    </Text>
                    <View className="flex-row justify-between items-center py-3 px-4 bg-gray-100 rounded-md">
                        <View className="flex-row">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <FontAwesome
                                    key={i}
                                    name="star"
                                    size={14}
                                    color="#FACC15"
                                />
                            ))}
                        </View>
                        <View className="items-end justify-between">
                            <Text className="text-md text-gray-700">
                                4 stars
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="bg-white py-4 px-6 mb-3 flex-col">
                    <Text className="text-lg font-bold text-gray-900 mb-2">
                        Others
                    </Text>
                    <View className="flex-col">
                        <View className="flex-row justify-between items-center py-1 px-2 mb-2">
                            <View className="flex-row items-center">
                                <View className="w-12 h-12 items-center justify-center mr-2">
                                    <FontAwesome
                                        name="tag"
                                        size={20}
                                        color="gray"
                                    />
                                </View>
                                <Text className="text-sm text-gray-700">
                                    Discount
                                </Text>
                            </View>

                            <View className="items-end justify-between">
                                <FontAwesome
                                    name="check-circle-o"
                                    size={20}
                                    color="gray"
                                />
                            </View>
                        </View>
                        <View className="w-full border-t border-gray-100 mb-2" />
                        <View className="flex-row justify-between items-center py-1 px-2 mb-2">
                            <View className="flex-row items-center">
                                <View className="w-12 h-12 items-center justify-center mr-2">
                                    <FontAwesome
                                        name="truck"
                                        size={20}
                                        color="gray"
                                    />
                                </View>
                                <Text className="text-sm text-gray-700">
                                    Free shipping
                                </Text>
                            </View>

                            <View className="items-end justify-between">
                                <FontAwesome
                                    name="check-circle-o"
                                    size={20}
                                    color="gray"
                                />
                            </View>
                        </View>
                        <View className="w-full border-t border-gray-100 mb-2" />
                        <View className="flex-row justify-between items-center py-1 px-2">
                            <View className="flex-row items-center">
                                <View className="w-12 h-12 items-center justify-center mr-2">
                                    <FontAwesome
                                        name="cube"
                                        size={18}
                                        color="gray"
                                    />
                                </View>
                                <Text className="text-sm text-gray-700">
                                    Same day delivery
                                </Text>
                            </View>

                            <View className="items-end justify-between">
                                <FontAwesome
                                    name="check-circle-o"
                                    size={20}
                                    color="gray"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

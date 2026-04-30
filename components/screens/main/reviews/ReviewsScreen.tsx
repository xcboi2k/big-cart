import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import Header from '@/components/shared/Header'

export default function ReviewsScreen() {
    const reviews = [
        {
            user_name: 'John Smith',
            rating: 4,
            review_description:
                'Excellent car! Smooth ride and great fuel efficiency. Would definitely recommend.',
        },
        {
            user_name: 'Sarah Johnson',
            rating: 3,
            review_description:
                'Good condition overall, but the interior could use some cleaning.',
        },
        {
            user_name: 'Michael Chen',
            rating: 5,
            review_description:
                'Perfect vehicle! Exceeded all my expectations. The seller was very professional.',
        },
        {
            user_name: 'Emily Wilson',
            rating: 3,
            review_description:
                'Reliable car with low mileage. Only minor scratches on the exterior.',
        },
    ]

    const renderStars = (numStars) => {
        const starIcons = []
        for (let i = 1; i <= 5; i++) {
            starIcons.push(
                <View key={i}>
                    <FontAwesome
                        key={i}
                        name="star"
                        size={16}
                        color={i <= numStars ? '#FFD700' : 'white'}
                    />
                </View>
            )
        }
        return starIcons
    }

    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header
                    title="Reviews"
                    onRightPress={() => {}}
                    rightIcon="plus"
                />
            </View>
            <ScrollView className="w-full px-4">
                {reviews ? (
                    reviews.map((item, index) => (
                        <View
                            className="w-full rounded-lg bg-white mb-4 p-4"
                            key={index}
                        >
                            <View className="flex-row items-center">
                                {/* Avatar Placeholder */}
                                <View className="mr-3">
                                    <Image
                                        source={{
                                            uri: 'https://ui-avatars.com/api/?name=User&background=E5E7EB&color=6B7280&bold=true',
                                        }}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </View>

                                {/* Text Content */}
                                <View className="flex-col">
                                    <Text className="text-lg font-bold text-black">
                                        {item.user_name}
                                    </Text>
                                    <Text className="text-sm text-gray-400">
                                        1 minute ago
                                    </Text>
                                </View>
                            </View>
                            <View className="w-full border-t border-gray-100 mt-2 mb-2" />
                            <View className="flex-row items-center mb-2">
                                <Text className="text-sm text-black font-bold mr-2">
                                    {item.rating}
                                </Text>
                                {renderStars(item.rating)}
                            </View>
                            <Text className="text-sm">
                                {item.review_description}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text className="text-[18px] mb-[8px]">
                        There are no reviews available right now.
                    </Text>
                )}
            </ScrollView>
        </View>
    )
}

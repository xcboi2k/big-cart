import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import Header from '@/components/shared/Header'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'

export default function WriteReviewsScreen() {
    const [selectedRating, setSelectedRating] = useState<number>(0)
    const handleSelectRating = (rating: number) => {
        setSelectedRating(rating)
    }

    const renderStars = () => {
        const starIcons = []
        for (let i = 1; i <= 5; i++) {
            starIcons.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => handleSelectRating(i)}
                    className="mx-1.5"
                >
                    <FontAwesome
                        key={i}
                        name="star"
                        size={50}
                        color={i <= selectedRating ? '#FFD700' : 'white'}
                    />
                </TouchableOpacity>
            )
        }
        return starIcons
    }

    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header title="Write Review" />
            </View>

            <View className="w-full items-center mt-[15%] px-4">
                {/* Title */}
                <View className="w-full px-6 mb-6">
                    <Text className="text-2xl font-bold text-gray-900 mb-3 text-center">
                        What do you think ?
                    </Text>

                    <Text className="text-base text-gray-600 text-center">
                        Please give your rating by clicking on the stars below
                    </Text>
                </View>
                <View className="w-[50%] justify-center flex flex-row mb-6">
                    {renderStars()}
                </View>
                {/* Input */}
                <View className="w-full mb-6">
                    <CustomTextInput
                        inputProps={{
                            placeholder: 'Tell us about your experience',
                            keyboardType: 'email-address',
                            autoCapitalize: 'none',
                        }}
                        variant="review"
                        padding="25px"
                        marginBottom="5px"
                        hasIcon={true}
                    />
                </View>

                {/* Button */}
                <ButtonText title="Start shopping" />
            </View>
        </View>
    )
}

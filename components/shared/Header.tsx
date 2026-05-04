import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Feather } from '@expo/vector-icons'

type Props = {
    title?: string
    onBack?: () => void
    rightIcon?: string
    onRightPress?: () => void
    hasBackground?: boolean
    variant?: 'default' | 'search'
    onSearchPress?: () => void
}

const Header = ({
    title,
    onBack,
    rightIcon,
    onRightPress,
    hasBackground = true,
    variant = 'default',
    onSearchPress,
}: Props) => {
    return (
        <View
            className="w-full justify-center relative py-6 mb-4"
            style={{
                backgroundColor: hasBackground ? '#FFFFFF' : 'transparent',
            }}
        >
            {/* DEFAULT HEADER */}
            {variant === 'default' && (
                <View className="justify-center relative py-2">
                    {/* LEFT */}
                    <TouchableOpacity
                        onPress={onBack}
                        className="absolute left-4"
                        hitSlop={10}
                    >
                        <FontAwesome name="arrow-left" size={20} color="#111" />
                    </TouchableOpacity>

                    {/* CENTER */}
                    {title && (
                        <View className="items-center px-10">
                            <Text
                                className="text-xl font-bold text-gray-900"
                                numberOfLines={1}
                            >
                                {title}
                            </Text>
                        </View>
                    )}

                    {/* RIGHT */}
                    {rightIcon && onRightPress && (
                        <TouchableOpacity
                            onPress={onRightPress}
                            className="absolute right-4"
                            hitSlop={10}
                        >
                            <FontAwesome
                                name={rightIcon}
                                size={22}
                                color="#111"
                            />
                        </TouchableOpacity>
                    )}
                </View>
            )}

            {/* SEARCH HEADER */}
            {variant === 'search' && (
                <View className="flex-row items-center px-4">
                    {/* BACK */}
                    <TouchableOpacity onPress={onBack} className="mr-3">
                        <FontAwesome name="arrow-left" size={20} color="#111" />
                    </TouchableOpacity>

                    {/* SEARCH BAR */}
                    <View className="flex-1 flex-row items-center bg-gray-100 rounded-xl px-3 py-2">
                        <Feather name="search" size={18} color="#9CA3AF" />

                        <TextInput
                            placeholder="Search keywords..."
                            placeholderTextColor="#9CA3AF"
                            className="flex-1 ml-2 text-sm"
                        />

                        {/* FILTER ICON */}
                        <TouchableOpacity onPress={onSearchPress}>
                            <FontAwesome
                                name="sliders"
                                size={18}
                                color="#6B7280"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    )
}

export default Header

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

type Props = {
    title?: string
    onBack?: () => void
    rightIcon?: string
    onRightPress?: () => void
    hasBackground?: boolean
}

const Header = ({
    title,
    onBack,
    rightIcon,
    onRightPress,
    hasBackground = true,
}: Props) => {
    return (
        <View
            className="w-full justify-center relative py-6 mb-4"
            style={{
                backgroundColor: hasBackground ? '#FFFFFF' : 'transparent',
            }}
        >
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
                <View className="items-center justify-center px-10">
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
                    <FontAwesome name={rightIcon} size={24} color="#111" />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Header

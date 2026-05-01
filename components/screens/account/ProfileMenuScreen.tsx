import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Entypo from '@expo/vector-icons/Entypo'
import { Feather, Ionicons } from '@expo/vector-icons'

export default function ProfileMenuScreen() {
    const settingsDirectory = [
        {
            icon: <FontAwesome name="user-o" size={20} color="#6CC51D" />,
            text: 'About me',
            // onPress: () => navigation.navigate('Profile'),
        },
        {
            icon: (
                <MaterialCommunityIcons
                    name="package-variant-closed"
                    size={24}
                    color="#6CC51D"
                />
            ),
            text: 'My Orders',
            // onPress: () => navigation.navigate('Profile'),
        },
        {
            icon: <FontAwesome name="heart-o" size={20} color="#6CC51D" />,
            text: 'My Favorites',
            // onPress: () => navigation.navigate('Profile'),
        },
        {
            icon: <Feather name="map-pin" size={20} color="#6CC51D" />,
            text: 'My Address',
            // onPress: () => navigation.navigate('Profile'),
        },
        {
            icon: <FontAwesome name="credit-card" size={18} color="#6CC51D" />,
            text: 'Credit Cards',
            // onPress: () => navigation.navigate('Profile'),
        },
        {
            icon: <Ionicons name="receipt-outline" size={20} color="#6CC51D" />,
            text: 'Transactions',
            // onPress: () => navigation.navigate('ChangePassword'),
        },
        {
            icon: (
                <Ionicons
                    name="notifications-outline"
                    size={20}
                    color="#6CC51D"
                />
            ),
            text: 'Notifications',
            // onPress: () => navigation.navigate('TermsConditions'),
            // newSection: true,
        },
        {
            icon: (
                <MaterialCommunityIcons
                    name="logout"
                    size={20}
                    color="#6CC51D"
                />
            ),
            text: 'Log Out',
            // onPress: () => navigation.navigate('Logout'),
        },
    ]

    return (
        <View className="flex-1 items-center pb-5 mt-10 bg-background-200">
            <View className="absolute top-0 w-full items-center">
                <View className="w-[140%] h-[70px] bg-white" />
            </View>

            <View className="w-full items-center pb-6 pt-8">
                {/* Avatar */}
                <View className="w-20 h-20 rounded-full bg-primary-300 items-center justify-center mb-3">
                    <Text className="text-primary-100 text-2xl font-bold">
                        TU
                    </Text>
                </View>

                {/* Username */}
                <Text className="text-black text-lg font-bold">Test User</Text>

                {/* Email */}
                <Text className="text-black/80 text-sm mt-1">
                    test@example.com
                </Text>
            </View>

            <ScrollView className="w-full">
                <View className="w-full px-6 py-4">
                    {settingsDirectory.map(
                        ({ icon, text, onPress, newSection }, index) => {
                            const isMiscellaneous = [
                                'Terms and Conditions',
                                'Privacy Policy',
                            ].includes(text)

                            return (
                                <React.Fragment key={index}>
                                    {/* Item */}
                                    <TouchableOpacity
                                        // onPress={onPress}
                                        className="flex-row items-center justify-between mb-5"
                                        activeOpacity={0.7}
                                    >
                                        <View className="flex-row items-center flex-1">
                                            {/* Icon */}
                                            <View className="w-10 h-10 items-center justify-center mr-4">
                                                {icon}
                                            </View>

                                            {/* Text */}
                                            <Text className="font-semibold text-lg text-black flex-shrink">
                                                {text}
                                            </Text>
                                        </View>

                                        {/* Optional indicator */}
                                        <Entypo
                                            name="chevron-right"
                                            size={24}
                                            color="#6CC51D"
                                        />
                                    </TouchableOpacity>
                                </React.Fragment>
                            )
                        }
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

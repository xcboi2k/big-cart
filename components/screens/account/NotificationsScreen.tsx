import React from 'react'
import { ScrollView, Switch, Text, View } from 'react-native'

import Header from '@/components/shared/Header'
import ButtonText from '@/components/shared/ButtonText'

export default function NotificationsScreen() {
    const notificationOptions = [
        {
            id: 1,
            notificationType: 'Allow Notifications',
            notificationInfo:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumym',
            isEnabled: false,
        },
        {
            id: 2,
            notificationType: 'Email Notifications',
            notificationInfo:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumym',
            isEnabled: true,
        },
        {
            id: 3,
            notificationType: 'Order Notifications',
            notificationInfo:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumym',
            isEnabled: true,
        },
        {
            id: 4,
            notificationType: 'General Notifications',
            notificationInfo:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumym',
            isEnabled: false,
        },
    ]

    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header title="Notifications" />
            </View>

            <ScrollView className="w-full px-4">
                {notificationOptions.map((item, index) => (
                    <View
                        className="bg-white py-4 px-6 mb-3 flex-col"
                        key={index}
                    >
                        <View className="flex-row justify-between items-center py-1 px-2 mb-2">
                            <View className="w-[80%] flex-col">
                                <Text className="text-lg font-bold text-gray-900 mb-2">
                                    {item.notificationType}
                                </Text>
                                <Text className="text-sm text-gray-700">
                                    {item.notificationInfo}
                                </Text>
                            </View>

                            <View className="items-end justify-between">
                                <Switch
                                    trackColor={{
                                        false: '#767577',
                                        true: '#6CC51D',
                                    }}
                                    thumbColor="#f4f3f4"
                                    // onValueChange={() =>
                                    //     setDefaultAddress(item.id)
                                    // }
                                    value={item.isEnabled}
                                />
                            </View>
                        </View>
                    </View>
                ))}

                <View className="mt-[20%] pb-2 px-4">
                    <ButtonText title="Save settings" />
                </View>
            </ScrollView>
        </View>
    )
}

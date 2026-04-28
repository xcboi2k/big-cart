import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Header from '@/components/shared/Header'
import { formatPeso } from '@/utils/formatCurrency'
import ButtonText from '@/components/shared/ButtonText'
import CartItem from '@/components/shared/shopping-cart/CartItem'

export default function ShoppingCartScreen() {
    const cartData = [
        {
            id: 1,
            name: 'Fresh Broccoli',
            price: 22.22,
            quantity: 4,
            weight: '1.50 lbs',
        },
        {
            id: 2,
            name: 'Black Grapes',
            price: 22.22,
            quantity: 5,
            weight: '5.0 lbs',
        },
        {
            id: 3,
            name: 'Carrots',
            price: 18.5,
            quantity: 3,
            weight: '1.0 kg',
        },
        {
            id: 4,
            name: 'Tomatoes',
            price: 30,
            quantity: 2,
            weight: '1.2 kg',
        },
        {
            id: 5,
            name: 'Spinach',
            price: 12,
            quantity: 6,
            weight: 'per bundle',
        },
    ]

    return (
        <View className="flex-1 items-center pb-5 mt-10 bg-background-200">
            <Header title="Shopping Cart" />
            <ScrollView className="w-full px-4">
                {cartData.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        weight={item.weight}
                        onAdd={() => console.log('add', item.id)}
                        onRemove={() => console.log('remove', item.id)}
                        onDelete={() => console.log('delete', item.id)}
                    />
                ))}
            </ScrollView>
            <View className="w-full h-[30%] rounded-t-[10px] bg-white flex flex-col p-[30px] absolute bottom-[0px]">
                <View className="flex-row justify-between items-center mb-1">
                    <Text className="text-gray-400 font-medium text-lg text-center">
                        Subtotal
                    </Text>
                    <Text className="text-gray-400 font-medium text-lg text-center">
                        {formatPeso(1000)}
                    </Text>
                </View>
                <View className="flex-row justify-between items-center mb-1">
                    <Text className="text-gray-400 font-medium text-lg text-center">
                        Shipping charges
                    </Text>
                    <Text className="text-gray-400 font-medium text-lg text-center">
                        {formatPeso(100)}
                    </Text>
                </View>
                <View className="w-full border-t border-gray-100 mt-3 mb-2" />
                <View className="flex-row justify-between items-center mb-6">
                    <Text className="text-black font-bold text-2xl text-center">
                        Total
                    </Text>
                    <Text className="text-black font-bold text-2xl text-center">
                        {formatPeso(1100)}
                    </Text>
                </View>
                <ButtonText title="Checkout" />
            </View>
        </View>
    )
}

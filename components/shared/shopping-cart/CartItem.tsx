import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { formatPeso } from '@/utils/formatCurrency'

type Props = {
    name: string
    price: number
    quantity: number
    weight: string
    onAdd: () => void
    onRemove: () => void
    onDelete: () => void
}

const CartItem = ({
    name,
    price,
    quantity,
    weight,
    onAdd,
    onRemove,
    onDelete,
}: Props) => {
    // 👉 Right swipe action (DELETE)
    const renderRightActions = () => (
        <TouchableOpacity
            onPress={onDelete}
            className="w-20 bg-red-500 justify-center items-center rounded-r-2xl"
        >
            <FontAwesome name="trash" size={20} color="#fff" />
        </TouchableOpacity>
    )

    return (
        // <Swipeable renderRightActions={renderRightActions}>
        //     <View className="bg-white rounded-2xl p-4 mb-3 flex-row items-center">
        //         {/* LEFT ICON */}
        //         <View className="w-12 h-12 rounded-full bg-green-100 items-center justify-center mr-3">
        //             <FontAwesome name="leaf" size={20} color="#22C55E" />
        //         </View>

        //         {/* INFO */}
        //         <View className="flex-1">
        //             <Text className="text-xs text-green-500">
        //                 {formatPeso(price)} x {quantity}
        //             </Text>

        //             <Text className="text-base font-bold text-gray-900">
        //                 {name}
        //             </Text>

        //             <Text className="text-xs text-gray-400">{weight}</Text>
        //         </View>

        //         {/* ACTIONS */}
        //         <View className="items-end justify-between h-12">
        //             {/* ADD */}
        //             <TouchableOpacity onPress={onAdd}>
        //                 <Text className="text-green-500 text-lg font-bold">
        //                     +
        //                 </Text>
        //             </TouchableOpacity>

        //             {/* QTY */}
        //             <Text className="text-sm text-gray-700">{quantity}</Text>

        //             {/* REMOVE */}
        //             <TouchableOpacity onPress={onRemove}>
        //                 <Text className="text-green-500 text-lg font-bold">
        //                     -
        //                 </Text>
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // </Swipeable>
        <View className="bg-white rounded-2xl py-4 px-6 mb-3 flex-row items-center">
            {/* LEFT ICON */}
            <View className="w-14 h-14 rounded-full bg-green-100 items-center justify-center mr-4">
                <FontAwesome name="leaf" size={24} color="#22C55E" />
            </View>

            {/* INFO */}
            <View className="flex-1">
                <Text className="text-sm text-primary-300">
                    {formatPeso(price)} x {quantity}
                </Text>

                <Text className="text-lg font-bold text-gray-900">{name}</Text>

                <Text className="text-sm text-gray-400">{weight}</Text>
            </View>

            {/* ACTIONS */}
            <View className="items-end justify-between">
                {/* ADD */}
                <TouchableOpacity onPress={onAdd}>
                    <Text className="text-primary-300 text-lg font-bold">
                        +
                    </Text>
                </TouchableOpacity>

                {/* QTY */}
                <Text className="text-lg text-gray-700">{quantity}</Text>

                {/* REMOVE */}
                <TouchableOpacity onPress={onRemove}>
                    <Text className="text-primary-300 text-lg font-bold">
                        -
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem

import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function CategoriesDisplay() {
    const categories = [
        { id: 1, name: 'Groceries', icon: 'shopping-basket', color: '#22C55E' },
        { id: 2, name: 'Fruits', icon: 'apple', color: '#F97316' },
        { id: 3, name: 'Vegetables', icon: 'leaf', color: '#16A34A' },
        { id: 4, name: 'Drinks', icon: 'coffee', color: '#3B82F6' },
        { id: 5, name: 'Meat', icon: 'cutlery', color: '#EF4444' },
        { id: 6, name: 'Seafood', icon: 'anchor', color: '#06B6D4' },
        { id: 7, name: 'Snacks', icon: 'birthday-cake', color: '#F59E0B' },
        { id: 8, name: 'Frozen', icon: 'snowflake-o', color: '#60A5FA' },
        { id: 9, name: 'Dairy', icon: 'tint', color: '#A78BFA' },
        // { id: 10, name: 'Bakery', icon: 'bread-slice', color: '#D97706' },
    ]

    return (
        <View className="w-full mt-4">
            <View className="flex-row items-center justify-between mb-3 px-4">
                {/* Title */}
                <Text className="text-lg font-bold text-gray-900">
                    Categories
                </Text>

                {/* Navigate button */}
                <TouchableOpacity
                    // onPress={() => navigation.navigate('Categories')}
                    className="flex-row items-center"
                    activeOpacity={0.7}
                >
                    <FontAwesome
                        name="chevron-right"
                        size={14}
                        color="#6B7280"
                    />
                </TouchableOpacity>
            </View>

            {/* Horizontal scroll */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            >
                {categories.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        className="items-center mr-4"
                        activeOpacity={0.7}
                    >
                        {/* Icon circle */}
                        <View
                            className="w-14 h-14 rounded-full items-center justify-center"
                            style={{ backgroundColor: item.color + '20' }}
                        >
                            <FontAwesome
                                name={item.icon}
                                size={20}
                                color={item.color}
                            />
                        </View>

                        {/* Label */}
                        <Text
                            className="text-xs text-gray-700 mt-2 text-center"
                            numberOfLines={1}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Optional hint */}
            <Text className="text-xs text-gray-400 mt-2 text-center">
                Swipe to see more categories
            </Text>
        </View>
    )
}

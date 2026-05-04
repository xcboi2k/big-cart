import React from 'react'
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

import Header from '@/components/shared/Header'
import Section from '@/components/shared/search/Section'
import BottomActions from '@/components/shared/search/BottomActions'

export default function SearchScreen() {
    return (
        <View className="flex-1 items-center pb-5 mt-10 bg-background-200">
            <Header variant="search" />
            <Section
                title="Search History"
                data={[
                    'Fresh Grocery',
                    'Bananas',
                    'cheetos',
                    'vegetables',
                    'Fruits',
                ]}
            />

            <Section
                title="Discover more"
                data={[
                    'Fresh Grocery',
                    'Bananas',
                    'cheetos',
                    'vegetables',
                    'Fruits',
                ]}
            />

            <BottomActions />
        </View>
    )
}

import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
    const { width } = Dimensions.get('window');

    const onboardingSlides = [
        {
            key: '1',
            image: require('@/assets/images/onboarding/onboarding1.png'),
            logo: require('@/assets/images/bigcart-logo.png'),
            title: 'Welcome to',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        },
        {
            key: '2',
            image: require('@/assets/images/onboarding/onboarding2.png'),
            title: 'Buy Quality\nDairy Products',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        },
        {
            key: '3',
            image: require('@/assets/images/onboarding/onboarding3.png'),
            title: 'Buy Premium\nQuality Fruits',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        },
        {
            key: '4',
            image: require('@/assets/images/onboarding/onboarding4.png'),
            title: 'Get Discounts\nOn All Products',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleScroll = (event: any) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

    const renderItem = ({ item, index }: any) => (
        <ImageBackground source={item.image} style={{ width }} resizeMode="stretch" className="flex-1">
            <View className="flex-1 items-center mt-[40px] px-[30px]">
                <Text className={`text-text-200 text-[30px] font-bold text-center ${item.logo ? 'mb-[5px]' : 'mb-[30px]'}`}>
                    {item.title}
                </Text>

                {item.logo && (
                    <Image source={item.logo} resizeMode="contain" className="mb-[10px]" />
                )}

                <Text className="w-[80%] text-text-100 text-[15px] text-center mb-[15px]">
                    {item.subtitle}
                </Text>

                {/* Footer Section */}
                <View className="absolute bottom-[30px] left-0 right-0 items-center">
                    {/* Pagination Dots */}
                    <View className="flex-row mb-[15px]">
                    {Array.from({ length: onboardingSlides.length }).map((_, dotIndex) => (
                        <View
                        key={dotIndex}
                        className={`w-[8px] h-[8px] rounded-full mx-[5px] ${
                            currentIndex === dotIndex ? 'bg-primary-300' : 'bg-gray-300'
                        }`}
                        />
                    ))}
                    </View>

                    <TouchableOpacity className="w-[90%] bg-primary-300 py-[15px] rounded-[5px]">
                        <Text className="text-center text-background-100 text-[15px] font-semibold">
                        Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
    
    return (
        <View className='w-full flex-1 bg-red-500'>
            <FlatList
                data={onboardingSlides}
                keyExtractor={(item) => item.key}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                renderItem={renderItem}
                ref={flatListRef}
            />
        </View>
    )
}

import React from 'react'
import { View, Text } from 'react-native'

const steps = [
    { id: 1, label: 'DELIVERY' },
    { id: 2, label: 'ADDRESS' },
    { id: 3, label: 'PAYMENT' },
]

const Stepper = ({ currentStep = 1 }) => {
    return (
        <View className="w-full items-center mt-6 mb-6">
            {/* Row */}
            <View className="flex-row items-center justify-between w-[90%]">
                {steps.map((step, index) => {
                    const isActive = step.id === currentStep
                    const isCompleted = step.id < currentStep

                    return (
                        <View key={step.id} className="items-center">
                            {/* Circle + Line */}
                            <View className="flex-row items-center">
                                {/* Circle */}
                                <View
                                    className={`w-12 h-12 rounded-full items-center justify-center
                                    ${
                                        isActive || isCompleted
                                            ? 'bg-[#6CC51D]'
                                            : 'bg-gray-200'
                                    }`}
                                >
                                    <Text
                                        className={`font-bold
                                        ${
                                            isActive || isCompleted
                                                ? 'text-white'
                                                : 'text-gray-500'
                                        }`}
                                    >
                                        {step.id}
                                    </Text>
                                </View>

                                {/* Line (except last) */}
                                {index !== steps.length - 1 && (
                                    <View
                                        className={`absolute left-full top-1/2 h-[2px] w-[120px]
                                        ${
                                            isCompleted
                                                ? 'bg-[#6CC51D]'
                                                : 'bg-gray-200'
                                        }`}
                                    />
                                )}
                            </View>

                            {/* Label */}
                            <Text
                                className={`text-xs mt-2 text-center font-medium
                                ${
                                    isActive
                                        ? 'text-[#6CC51D]'
                                        : 'text-gray-400'
                                }`}
                            >
                                {step.label}
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default Stepper

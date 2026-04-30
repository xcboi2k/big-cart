import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { SelectList } from 'react-native-dropdown-select-list'
import Feather from '@expo/vector-icons/Feather'

type Props = {
    data: any
    title?: string
    marginBottom?: number
    customLabelColor?: string
    variant?: string
    selectedValue?: string
    onValueChange?: (value: string) => void
    errorMessage?: string
    hasIcon?: boolean
    iconName?: keyof typeof Feather.glyphMap
}

const CustomDropdown = ({
    data,
    title,
    marginBottom = 15,
    customLabelColor = '#232323',
    variant = 'label-value',
    selectedValue,
    onValueChange,
    errorMessage,
    hasIcon = false,
    iconName = 'globe',
}: Props) => {
    return (
        <View className={`w-full mb-[${marginBottom}px] flex-col`}>
            {title && (
                <Text
                    style={{ color: customLabelColor }}
                    className="text-[14px] font-bold mb-[5px]"
                >
                    {title}
                </Text>
            )}

            {/* INPUT CONTAINER (MATCHED STYLE) */}
            <View className="w-full flex-row items-center bg-white rounded-[5px] bg-white px-6 py-2">
                {hasIcon && (
                    <View>
                        <Feather name={iconName} size={24} color="#868889" />
                    </View>
                )}

                <View className="flex-1">
                    {variant === 'label-value' && (
                        <SelectList
                            setSelected={(val: string) => onValueChange?.(val)}
                            data={data}
                            save="value"
                            boxStyles={{
                                backgroundColor: 'transparent',
                                borderWidth: 0,
                                height: 40,
                            }}
                            dropdownStyles={{
                                backgroundColor: '#fff',
                            }}
                            search={false}
                        />
                    )}

                    {variant === 'non-label-value' && (
                        <SelectList
                            setSelected={(val: string) => onValueChange?.(val)}
                            data={data}
                            boxStyles={{
                                backgroundColor: 'transparent',
                                borderWidth: 0,
                                height: 40,
                            }}
                        />
                    )}

                    {variant === 'label-key' && (
                        <SelectList
                            setSelected={(val: string) => onValueChange?.(val)}
                            data={data}
                            save="key"
                            boxStyles={{
                                backgroundColor: 'transparent',
                                borderWidth: 0,
                                height: 40,
                            }}
                        />
                    )}

                    {variant === 'name-id' && (
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(val) => onValueChange?.(val)}
                        >
                            <Picker.Item label="Select a value" value={null} />
                            {data?.map((item: any, index: number) => (
                                <Picker.Item
                                    key={index}
                                    label={item.name}
                                    value={item.id}
                                />
                            ))}
                        </Picker>
                    )}
                </View>
            </View>

            {/* ERROR */}
            {errorMessage ? (
                <Text className="text-[10px] text-red-500 mt-[4px]">
                    {errorMessage}
                </Text>
            ) : null}
        </View>
    )
}

export default CustomDropdown

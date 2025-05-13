import React, { useState } from 'react'
import { View, TextInput, Text, TextInputProps, TouchableOpacity } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

interface CustomTextInputProps {
    padding?: string;
    marginBottom?: string;
    customLabel?: string;
    customLabelColor?: string;
    inputProps?: TextInputProps; // Assuming you want to use TextInputProps from react-native
    inputFontSize?: number;
    variant: string;
    hasIcon?: boolean;
}

export default function CustomTextInput(
    {
        padding = "25px",
        marginBottom="5px",
        customLabel,
        customLabelColor,
        variant='default',
        // isFilled = false,
        inputProps,
        inputFontSize,
        hasIcon = false,
    }: CustomTextInputProps
) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    
    return (
        <View className={`w-full mb-[${marginBottom}] flex-col`}>
            {
                customLabel ? 
                <Text style={{ color: customLabelColor || '#232323' }} className="text-[14px] font-bold mb-[5px]">
                    {customLabel}
                </Text> :  null
            }
            <View className='w-full flex-row items-center bg-white rounded-[5px] bg-white px-[15px]'>
                {
                    hasIcon && <View className='mr-[10px]'>
                        {
                            variant === 'email' ? <Feather name="mail" size={24} color="#868889" /> : 
                            variant === 'password' ? <Feather name="lock" size={24} color="#868889" /> :
                            variant === 'mobile-number' ? <Feather name="phone" size={24} color="#868889" /> :
                            null
                        }
                    </View>
                }
                {variant === 'mobile-number' && <Text className="mr-2">+63</Text>}
                <TextInput
                    {...inputProps}
                    className={`text-${inputFontSize}`}
                    secureTextEntry={variant === 'password' && !isPasswordVisible}
                />
                {
                    variant === 'password' && 
                        <View className='items-center ml-auto'>
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                {
                                    isPasswordVisible ? (
                                        <Entypo name="eye" size={24} color={'#6CC51D'} />
                                    ) : (
                                        <Entypo name="eye-with-line" size={24} color={'#6CC51D'} />
                                    )
                                }
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </View>
    )
}

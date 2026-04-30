import React, { useState } from 'react'
import { ScrollView, Switch, Text, View } from 'react-native'

import Header from '@/components/shared/Header'
import Stepper from '@/components/shared/order-process/Stepper'
import ButtonText from '@/components/shared/ButtonText'
import CustomTextInput from '@/components/shared/CustomTextInput'
import CustomDropdown from '@/components/shared/CustomDropdown'

export default function OrderShippingInformationScreen() {
    const countries = [
        { label: 'Philippines', value: 'PH' },
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'United Kingdom', value: 'GB' },
        { label: 'Australia', value: 'AU' },
        { label: 'Japan', value: 'JP' },
        { label: 'South Korea', value: 'KR' },
        { label: 'Singapore', value: 'SG' },
        { label: 'India', value: 'IN' },
        { label: 'Germany', value: 'DE' },
    ]
    const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
        ''
    )

    const [toggleSaveAddress, setToggleSaveAddress] = useState(false)

    return (
        <View className="flex-1 bg-background-200">
            {/* HEADER */}
            <View className="items-center mt-10">
                <Header title="Shipping Address" />
            </View>
            <ScrollView className="w-full px-4">
                <View className="w-[80%] self-center flex-row justify-center items-center">
                    <Stepper currentStep={2} />
                </View>

                <CustomTextInput
                    inputProps={{
                        placeholder: 'Name',
                        keyboardType: 'email-address',
                        // onChangeText: formik.handleChange("email"),
                        // value: formik.values.email,
                        autoCapitalize: 'none',
                    }}
                    variant="name"
                    padding="25px"
                    marginBottom="5px"
                    hasIcon={true}
                />
                <CustomTextInput
                    inputProps={{
                        placeholder: 'Email Address',
                        keyboardType: 'email-address',
                        // onChangeText: formik.handleChange("email"),
                        // value: formik.values.email,
                        autoCapitalize: 'none',
                    }}
                    variant="email"
                    padding="25px"
                    marginBottom="5px"
                    hasIcon={true}
                />
                <CustomTextInput
                    inputProps={{
                        placeholder: 'Mobile Number',
                        keyboardType: 'number-pad',
                        // onChangeText: formik.handleChange("email"),
                        // value: formik.values.email,
                        autoCapitalize: 'none',
                    }}
                    variant="mobile-number"
                    padding="25px"
                    marginBottom="5px"
                    hasIcon={true}
                />
                <CustomTextInput
                    inputProps={{
                        placeholder: 'Address',
                        keyboardType: 'email-address',
                        // onChangeText: formik.handleChange("email"),
                        // value: formik.values.email,
                        autoCapitalize: 'none',
                    }}
                    variant="address"
                    padding="25px"
                    marginBottom="5px"
                    hasIcon={true}
                />
                <CustomTextInput
                    inputProps={{
                        placeholder: 'Zip Code',
                        keyboardType: 'number-pad',
                        // onChangeText: formik.handleChange("email"),
                        // value: formik.values.email,
                        autoCapitalize: 'none',
                    }}
                    variant="zipcode"
                    padding="25px"
                    marginBottom="5px"
                    hasIcon={true}
                />
                <CustomTextInput
                    inputProps={{
                        placeholder: 'City',
                        keyboardType: 'email-address',
                        // onChangeText: formik.handleChange("email"),
                        // value: formik.values.email,
                        autoCapitalize: 'none',
                    }}
                    variant="city"
                    padding="25px"
                    marginBottom="5px"
                    hasIcon={true}
                />
                <CustomDropdown
                    data={countries}
                    selectedValue={selectedCountry}
                    onValueChange={(value) => setSelectedCountry(value)}
                    variant="label-value"
                    // errorMessage={errors.genderErrorMessage}
                    hasIcon={true}
                />
                <View className="w-full flex-row items-center">
                    <Switch
                        trackColor={{ false: '#767577', true: '#6CC51D' }}
                        thumbColor={'#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() =>
                            setToggleSaveAddress((prev) => !prev)
                        }
                        value={toggleSaveAddress}
                        className="mr-2"
                    />
                    <Text>Save this address</Text>
                </View>

                <View className="mt-[20%] pb-2 px-4">
                    <ButtonText title="Next" />
                </View>
            </ScrollView>
        </View>
    )
}

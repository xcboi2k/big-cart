import React, { useRef, useState } from 'react'
import { View, TextInput as RNTextInput } from 'react-native'

const OTPInput = ({ inputRefs }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', ''])

    const handleOtpChange = (index, value) => {
        setOtp((prevOtp) => {
            const newOtp = [...prevOtp]
            newOtp[index] = value
            return newOtp
        })

        // Move forward when typing
        if (value && index < otp.length - 1) {
            inputRefs[index + 1]?.current?.focus()
        }
    }
    const handleKeyPress = (index, key) => {
        if (key === 'Backspace') {
            setOtp((prevOtp) => {
                const newOtp = [...prevOtp]
                // Clear the current input if it's not empty
                if (newOtp[index] !== '') {
                    newOtp[index] = ''
                }
                // If current input is empty, clear the previous input and move focus
                else if (index > 0) {
                    newOtp[index - 1] = ''
                    inputRefs[index - 1].current.focus()
                }
                return newOtp
            })
        }
    }

    return (
        <View className="flex-row justify-center">
            {otp.map((digit, index) => (
                <RNTextInput
                    key={index}
                    ref={inputRefs[index]}
                    value={digit}
                    onChangeText={(text) =>
                        handleOtpChange(index, text.replace(/[^0-9]/g, ''))
                    }
                    onKeyPress={({ nativeEvent: { key } }) =>
                        handleKeyPress(index, key)
                    }
                    keyboardType="number-pad"
                    maxLength={1}
                    className={`w-14 h-14 mx-1.5 bg-gray-200 rounded-xl text-center text-lg font-bold text-gray-900 ${
                        digit ? 'bg-white border border-primary-300' : ''
                    }`}
                />
            ))}
        </View>
    )
}

export default OTPInput

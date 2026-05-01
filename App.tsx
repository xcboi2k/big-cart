import './global.css'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import OnboardingScreen from '@/components/screens/onboarding/OnboardingScreen'
import WelcomeScreen from '@/components/screens/auth/WelcomeScreen'
import LoginScreen from './components/screens/auth/LoginScreen'
import SignUpScreen from './components/screens/auth/SignUpScreen'
import HomeScreen from './components/screens/main/HomeScreen'
import CategoriesScreen from './components/screens/main/categories/CategoriesScreen'
import CategoriesItemsScreen from './components/screens/main/categories/CategoriesItemsScreen'
import ProductDetailsScreen from './components/screens/main/ProductDetailsScreen'
import ShoppingCartScreen from './components/screens/main/ShoppingCartScreen'
import FilterScreen from './components/screens/main/FilterScreen'
import ForgotPasswordScreen from './components/screens/auth/ForgotPasswordScreen'
import VerifyNumberScreen from './components/screens/auth/VerifyNumberScreen'
import VerifyOTPScreen from './components/screens/auth/VerifyOTPScreen'
import FavoritesScreen from './components/screens/main/FavoritesScreen'
import OrderStatusScreen from './components/screens/main/order-process/OrderStatusScreen'
import WriteReviewsScreen from './components/screens/main/reviews/WriteReviewsScreen'
import OrderShippingMethodScreen from './components/screens/main/order-process/OrderShippingMethodScreen'
import OrderShippingInformationScreen from './components/screens/main/order-process/OrderShippingInformationScreen'
import OrderShippingPaymentScreen from './components/screens/main/order-process/OrderShippingPaymentScreen'
import ReviewsScreen from './components/screens/main/reviews/ReviewsScreen'
import ProfileMenuScreen from './components/screens/account/ProfileMenuScreen'
import MyAddressScreen from './components/screens/account/MyAddressScreen'
import MyCardsScreen from './components/screens/account/MyCardsScreen'
import AddCreditCardScreen from './components/screens/account/AddCreditCardScreen'
import AddAddressScreen from './components/screens/account/AddAddressScreen'

export default function App() {
    return (
        <>
            {/* <OnboardingScreen /> */}
            {/* <WelcomeScreen /> */}
            {/* <LoginScreen /> */}
            {/* <SignUpScreen /> */}
            {/* <HomeScreen /> */}
            {/* <CategoriesScreen /> */}
            {/* <CategoriesItemsScreen /> */}
            {/* <ProductDetailsScreen /> */}
            {/* <ShoppingCartScreen /> */}
            {/* <FilterScreen /> */}
            {/* <ForgotPasswordScreen /> */}
            {/* <VerifyNumberScreen /> */}
            {/* <VerifyOTPScreen /> */}
            {/* <FavoritesScreen /> */}
            {/* <OrderStatusScreen /> */}
            {/* <WriteReviewsScreen /> */}
            {/* <OrderShippingMethodScreen /> */}
            {/* <OrderShippingInformationScreen /> */}
            {/* <OrderShippingPaymentScreen /> */}
            {/* <ReviewsScreen /> */}
            {/* <ProfileMenuScreen /> */}
            {/* <MyAddressScreen /> */}
            <AddAddressScreen />
            {/* <MyCardsScreen /> */}
            {/* <AddCreditCardScreen /> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

import "./global.css"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from "@/components/screens/onboarding/OnboardingScreen";
import WelcomeScreen from "@/components/screens/auth/WelcomeScreen";
import LoginScreen from "./components/screens/auth/LoginScreen";
import SignUpScreen from "./components/screens/auth/SignUpScreen";

export default function App() {
  return (
    <>
      {/* <OnboardingScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      <SignUpScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

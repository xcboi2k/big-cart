import "./global.css"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from "@/components/screens/onboarding/OnboardingScreen";
import WelcomeScreen from "@/components/screens/auth/WelcomeScreen";

export default function App() {
  return (
    <>
      {/* <OnboardingScreen /> */}
      <WelcomeScreen />
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

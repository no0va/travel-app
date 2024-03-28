import { Link } from "expo-router";
import { useFonts } from "expo-font";
import { styles } from "./style";
import { View } from "react-native";
import Landing from "./landing";
import ValidationEmail from "./validation-email";
import NewPassword from "./new-password";
import WelcomeScreen from "@/components/welcome-screen";
import ProfileProvider from "@/context/profile-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  let [fontsLoaded] = useFonts({
    "iran-sans": require("../assets/fonts/ttf/IRANSansWeb.ttf"),
    "iran-sans-bold": require("../assets/fonts/ttf/IRANSansWeb_Bold.ttf"),
  });
  // AsyncStorage.clear();
  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <ProfileProvider>
        <Landing />
      </ProfileProvider>
      // <View style={styles.header}>
      //   <Link href="/login/">👤</Link>
      // </View>
      // <NewPassword />
      // <ValidationEmail />
      // <Landing />
    );
  }
}

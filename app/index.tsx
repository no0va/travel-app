import { Link } from "expo-router";
import { useFonts } from "expo-font";
import { styles } from "./style";
import { View } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    "iran-sans": require("../assets/fonts/ttf/IRANSansWeb.ttf"),
    "iran-sans-bold": require("../assets/fonts/ttf/IRANSansWeb_Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <View style={styles.header}>
        <Link href="/login/">👤</Link>
      </View>
    );
  }
}

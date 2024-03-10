import { Link } from "expo-router";
import { useFonts } from "expo-font";
import ValidationEmail from "./validation-email";
import NewPassword from "./new-password";

export default function App() {
  let [fontsLoaded] = useFonts({
    "iran-sans": require("../assets/fonts/ttf/IRANSansWeb.ttf"),
    "iran-sans-bold": require("../assets/fonts/ttf/IRANSansWeb_Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <></>;
  } else {
    return <Link href="/login/">123</Link>;
    // return <NewPassword />;
  }
}

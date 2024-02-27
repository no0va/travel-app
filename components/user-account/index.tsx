import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./style";

export default function UserAcount({ label }: { label: "ورود" | "ثبت نام" }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {label === "ورود" ? "حساب کاربری دارم؟" : "حساب کابری ندارم؟"}
      </Text>
      <Link
        href={label === "ورود" ? "/login/" : "/register/"}
        style={styles.link}
      >
        {label}
      </Link>
    </View>
  );
}

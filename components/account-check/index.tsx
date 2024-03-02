import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./style";
import { accountCheck } from "@/constants/srings";

export default function AccountCheck({ type }: { type: "login" | "register" }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{accountCheck[type].des}</Text>
      <Link href={`/${type}/`} style={styles.link}>
        {accountCheck[type].title}
      </Link>
    </View>
  );
}

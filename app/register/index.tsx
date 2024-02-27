import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import UserAcount from "@/components/user-account";

export default function Register() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.image}
      />
      <View style={styles.mainBox}>
        <Text style={styles.title}>ثبت نام</Text>
        <View style={styles.contentbox}>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="نام کاربری" />
            <TextInput style={styles.input} placeholder="ایمیل" />
            <TextInput style={styles.input} placeholder="رمز عبور" />
            <TextInput style={styles.input} placeholder="تایید رمز عبور" />
            <Pressable
              style={{
                backgroundColor: "rgba(164, 235, 243, 1)",
                width: 128,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 48,
                borderRadius: 48,
              }}
            >
              <Text
                style={{
                  color: "rgba(12, 53, 158, 1)",
                  fontWeight: "700",
                  fontSize: 24,
                }}
              >
                ثبت نام
              </Text>
            </Pressable>
          </View>
          <UserAcount label="ورود" />
        </View>
      </View>
    </View>
  );
}

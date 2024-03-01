import { Image, StatusBar, Text, View } from "react-native";
import { styles } from "./style";
import AccountCheck from "@/components/account-check";
import { Button } from "react-native-paper";
import { BaseInput } from "@/components/base/inputs";

export default function Register() {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#CCF2F4" />
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.image}
      />
      <View style={styles.mainBox}>
        <Text style={styles.title}>ثبت نام</Text>
        <View style={styles.contentbox}>
          <View style={styles.inputBox}>
            <BaseInput placeholder="نام کابری" icon="account-outline" />
            <BaseInput placeholder="ایمیل" icon="email-outline" />
            <BaseInput placeholder="رمز عبور" icon="lock-alert-outline" />
            <BaseInput placeholder="تایید رمز عبور" icon="lock-check-outline" />
            <Button
              icon="arrow-left"
              mode="elevated"
              style={styles.button}
              onPress={() => console.log("Pressed")}
              rippleColor={"#3dcbdb"}
              textColor="rgba(12, 53, 158, 1)"
              children={<Text style={styles.labelButton}>ثبت نام</Text>}
            />
          </View>
          <Image
            source={require("@/assets/images/Blob 10.png")}
            style={{ position: "absolute", bottom: 0, right: -30 }}
          />
          <AccountCheck type="login" />
        </View>
      </View>
    </View>
  );
}

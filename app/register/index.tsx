import { Image, StatusBar, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import AccountCheck from "@/components/account-check";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button } from "react-native-paper";

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
            <View style={styles.inputContainer}>
              <View style={styles.inputBorder}>
                <FontAwesome name="user-o" style={styles.inputIcon} size={25} />
                <TextInput style={styles.input} placeholder="نام کاربری" />
              </View>
              <AntDesign
                name="caretright"
                style={styles.inputArrow}
                size={13}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputBorder}>
                <FontAwesome
                  name="envelope-o"
                  style={styles.inputIcon}
                  size={25}
                />
                <TextInput style={styles.input} placeholder="ایمیل" />
              </View>
              <AntDesign
                name="caretright"
                style={styles.inputArrow}
                size={13}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputBorder}>
                <MaterialCommunityIcons
                  name="lock-alert-outline"
                  style={styles.inputIcon}
                  size={25}
                />
                <TextInput style={styles.input} placeholder="رمز عبور" />
              </View>
              <AntDesign
                name="caretright"
                style={styles.inputArrow}
                size={13}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputBorder}>
                <MaterialCommunityIcons
                  name="lock-check-outline"
                  style={styles.inputIcon}
                  size={25}
                />
                <TextInput style={styles.input} placeholder="تایید رمز عبور" />
              </View>
              <AntDesign
                name="caretright"
                style={styles.inputArrow}
                size={13}
              />
            </View>

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

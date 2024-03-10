import { BaseInput } from "@/components/base/inputs";
import { mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { styles } from "./style";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function NewPassword() {
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        fetch(
          `https://smh1381.bsite.net/api/Accounts/SendSecurityCodeWithMail/?email=${values.password}`
        )
          .then((res) => res.json())
          .then((json) => {
            if (json.isSuccess) {
              router.replace("./login");
            }
          });
      }}
    >
      {({ handleSubmit, values }) => (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("@/assets/images/Group 162.png")}
            style={styles.backgroundImage}
          >
            <View style={styles.contentBox}>
              <Text style={styles.description}>
                رمز عبور جدید خود را وارد نمایید
              </Text>
              <View style={styles.inputBox}>
                <BaseInput
                  value={values.password}
                  name="password"
                  placeholder={mainStrings.password}
                  icon="lock-alert-outline"
                  type="email"
                />
                <BaseInput
                  value={values.confirmPassword}
                  name="confirmPassword"
                  placeholder={mainStrings.confirmPassword}
                  icon="lock-check-outline"
                  type="email"
                />
                <Button
                  mode="elevated"
                  style={styles.button}
                  onPress={() => handleSubmit()}
                  rippleColor={"#3dcbdb"}
                  textColor="rgba(12, 53, 158, 1)"
                  children={<Text style={styles.labelButton}>ارسال</Text>}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
}

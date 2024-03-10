import { BaseInput } from "@/components/base/inputs";
import { mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function ForgetPassword() {
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(values) => {
        fetch(
          `https://smh1381.bsite.net/api/Accounts/SendSecurityCodeWithMail/?email=${values.email}`
        )
          .then((res) => res.json())
          .then((json) => {
            if (json.isSuccess) {
              // navigation.navigate("Login", { name: "Login" });
              // console.log("first");
              router.replace("./validation-email");
            }
          });
      }}
    >
      {({ handleSubmit, values }) => (
        <View style={{ flex: 1 }}>
          <Image
            source={require("@/assets/images/login.png")}
            style={styles.image}
          />
          <View style={styles.contentBox}>
            <Text style={styles.description}>
              رمز عبور خود را فراموش کرده اید؟
            </Text>
            <View style={styles.inputBox}>
              <BaseInput
                value={values.email}
                name="email"
                placeholder={mainStrings.email}
                icon="email-outline"
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
        </View>
      )}
    </Formik>
  );
}

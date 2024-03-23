import { BaseInput } from "@/components/base/inputs";
import { mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  GestureResponderEvent,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { styles } from "./style";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import BaseButton from "@/components/base/button";

export default function ForgetPassword() {
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(values) => {
        setShowSpinner(true);
        fetch(
          `https://travelorganization.monster/api/User/Email/SendSecurityCodeWithMail?email=${values.email}`
        )
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setShowSpinner(false);
            if (json.isSuccess) {
              router.replace("./validation-email");
            }
          })
          .catch((error) => {
            setShowSpinner(false);
            console.log(error);
          });
      }}
    >
      {({ handleSubmit, values }) => (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar animated={true} backgroundColor="#fff" />
          <View style={styles.imageBox}>
            <Image source={require("@/assets/images/travel-logo.png")} />
          </View>
          <View style={styles.contentBox}>
            <Text style={styles.description}>رمز عبور خود را فراموش کرده اید؟</Text>
            <View style={styles.inputBox}>
              <BaseInput
                value={values.email}
                name="email"
                placeholder={mainStrings.email}
                icon="email-outline"
                type="email"
              />
            </View>
            <BaseButton
              handleSubmit={
                handleSubmit as (e: GestureResponderEvent | undefined) => void
              }
              label="دریافت کد"
              loader={showSpinner}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

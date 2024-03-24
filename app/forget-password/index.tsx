import { BaseInput } from "@/components/base/inputs";
import { mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
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
      validationSchema={Yup.object({
        email: Yup.string()
          .test("email", "ایمیل را به درستی وارد کنید", function (value) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              value as string
            );
          })
          .required("ایمیل خود را وارد نمایید!"),
      })}
    >
      {({ handleSubmit, values, errors }) => (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar animated={true} backgroundColor="#fff" />
          <View style={styles.imageBox}>
            <Image source={require("@/assets/images/travel-logo.png")} />
          </View>
          <View style={styles.contentBox}>
            <Text style={styles.description}>
              رمز عبور خود را فراموش کرده اید؟
            </Text>
            <View
              style={{
                ...styles.inputBox,
                borderColor: errors.email ? "#ff0000" : "#0C359E",
              }}
            >
              <BaseInput
                value={values.email}
                name="email"
                placeholder={mainStrings.email}
                icon="email-outline"
                type="email"
              />
              <Text style={styles.error}>{errors.email}</Text>
            </View>
            <BaseButton
              handleSubmit={
                handleSubmit as (e: GestureResponderEvent | undefined) => void
              }
              label="دریافت کد"
              loader={showSpinner}
              disabled={showSpinner}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

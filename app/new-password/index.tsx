import { BaseInput } from "@/components/base/inputs";
import { mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  GestureResponderEvent,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { styles } from "./style";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import BaseButton from "@/components/base/button";

export default function NewPassword() {
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        setShowSpinner(true);
        fetch(
          `https://travelorganization.monster/api/User/Accounts/ForgetPassword?newPassword==${values.password}`
        )
          .then((res) => res.json())
          .then((json) => {
            setShowSpinner(false);
            if (json.isSuccess) {
              router.replace("./login");
            }
          })
          .catch((error) => {
            setShowSpinner(false);
            console.log(error);
          });
      }}
    >
      {({ handleSubmit, values }) => (
        <View style={{ flex: 1 }}>
          <View style={styles.contentBox}>
            <Text style={styles.title}>تایید کد</Text>
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
              <View
                style={{
                  backgroundColor: "#bbb",
                  width: "100%",
                  height: 1.5,
                  marginVertical: 15,
                }}
              ></View>
              <BaseInput
                value={values.confirmPassword}
                name="confirmPassword"
                placeholder={mainStrings.confirmPassword}
                icon="lock-check-outline"
                type="email"
              />
            </View>
            <BaseButton
              handleSubmit={
                handleSubmit as (e: GestureResponderEvent | undefined) => void
              }
              label="ارسال"
              loader={showSpinner}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

//@ts-nocheck
import { GestureResponderEvent, TextInput, View } from "react-native";
import { Text } from "react-native";
import { styles } from "./style";
import { Formik } from "formik";
import { useRouter } from "expo-router";
import axios from "axios";
import BaseButton from "@/components/base/button";
import { useState } from "react";
import { OtpInput } from "react-native-otp-entry";

export default function ValidationEmail() {
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        code: "",
      }}
      onSubmit={(values) => {
        setShowSpinner(true);
        axios
          .get(
            `https://travelorganization.monster/api/User/Email/EmailValidation?code=${values.code}`
          )
          .then((json) => {
            setShowSpinner(false);
            console.log(json);
            if (json.status === 200) {
              router.replace("/new-password/");
            }
          })
          .catch((error) => {
            setShowSpinner(false);
            console.log(error);
          });
      }}
    >
      {({ handleSubmit, values, handleChange, errors }) => (
        <View style={styles.container}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>تایید کد</Text>
            <Text style={styles.description}>
              لطفا کدی که به ایمیل شما ارسال شده را وارد کنید.
            </Text>
          </View>
          <View
            style={{
              ...styles.inputBox,
              borderColor: errors.code ? "#ff0000" : "#0C359E",
            }}
          >
            <OtpInput
              numberOfDigits={4}
              onTextChange={handleChange("code")}
              theme={{
                inputsContainerStyle: {
                  gap: 16,
                },
                pinCodeContainerStyle: {
                  borderColor: "rgba(12, 53, 158, 1)",
                  borderWidth: 2,
                  width: 50,
                },
                pinCodeTextStyle: {
                  fontFamily: "iran-snas",
                },
              }}
            />
          </View>
          <BaseButton
            label="ارسال"
            handleSubmit={
              handleSubmit as (e: GestureResponderEvent | undefined) => void
            }
            loader={showSpinner}
          />
        </View>
      )}
    </Formik>
  );
}

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
  const [resError, setResError] = useState<string>("");

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
            setResError(error.response.data.message);
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
          <OtpInput
            numberOfDigits={4}
            onTextChange={handleChange("code")}
            theme={{
              containerStyle: {
                width: 250,
                marginBottom: 20,
                borderColor: "blue",
              },
              focusedPinCodeContainerStyle: {
                borderColor: resError ? "#ff0000" : "#rgba(12, 53, 158, 1)",
              },
              pinCodeContainerStyle: {
                borderColor: resError ? "#ff0000" : "rgba(12, 53, 158, 1)",
                borderWidth: 2,
                width: 50,
              },
              focusStickStyle: {
                backgroundColor: "#585858",
              },
              pinCodeTextStyle: {
                // fontFamily: "iran-snas",
                color: "#585858",
              },
            }}
          />
          <View style={{ height: 25, width:"100%",}}>
            <Text style={styles.error}>{resError}</Text>
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

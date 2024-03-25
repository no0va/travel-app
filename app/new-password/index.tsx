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
import { useRouter } from "expo-router";
import BaseButton from "@/components/base/button";
import * as Yup from "yup";
import axios from "axios";
import BackButton from "@/components/back-button";

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
        axios
          .post(
            `https://travelorganization.monster/api/User/Accounts/ForgetPassword?newPassword=${values.password}`,
            { email: "m.ehsan1381@gmail.com" }
          )
          .then((json) => {
            setShowSpinner(false);
            if (json.data.isSuccess) {
              router.push("./login");
            }
          })
          .catch((error) => {
            setShowSpinner(false);
            console.log(error);
          });
      }}
      validationSchema={Yup.object({
        password: Yup.string()
          .min(8, "رمز عبور حداقل باید 8 کارکتر باشد!")
          .required("رمز عبور خود را وارد نمایید!")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,})/,
            "رمز عبور یابد شامل حداقل یک عدد، یک حرف خاص،حرف انگلیسی کوچک و بزرگ باشد"
          ),
        confirmPassword: Yup.string()
          .required("تایید رمز عبور خود را وارد نمایید!")
          .oneOf([Yup.ref("password")], "تاییده رمز عبور مطابقت ندارد!"),
      })}
    >
      {({ handleSubmit, values, errors }) => (
        <View style={{ flex: 1 }}>
          <View style={styles.contentBox}>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.title}>تغییر رمز</Text>
              <BackButton />
            </View>
            <Text style={styles.description}>
              رمز عبور جدید خود را وارد نمایید
            </Text>
            <View
              style={{
                ...styles.inputBox,
                borderColor:
                  errors.confirmPassword || errors.password
                    ? "#ff0000"
                    : "#0C359E",
              }}
            >
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
              <Text style={styles.error}>
                {errors.confirmPassword || errors.password}
              </Text>
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

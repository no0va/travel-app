import {
  GestureResponderEvent,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { styles } from "./style";
import AccountCheck from "@/components/account-check";
import { Button } from "react-native-paper";
import { BaseInput } from "@/components/base/inputs";
import { mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import * as Yup from "yup";
import { form } from "./constant";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import BaseButton from "@/components/base/button";

export default function Register() {
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  return (
    <Formik
      initialValues={{
        name: "",
        family: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("نام خود را وارد کنید!"),
        family: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("نام خانوادگی خود را وارد کنید!"),
        email: Yup.string()
          .email("ایمیل صحبح نیست!")
          .test("email", "ایمیل را به درستی وارد کنید", function (value) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              value as string
            );
          })
          .required("ایمیل خود را وارد نمایید!"),
        password: Yup.string()
          .min(8, "رمز عبور حداقل باید 8 کارکتر باشد!")
          .required("رمز عبور خود را وارد نمایید!"),
        // .matches(
        //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        //   "رمز عبور یابد شامل حداقل یک عدد، یک حرف خاص،حرف انگلیسی کوچک و بزرگ باشد"
        // ),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "تاییده رمز عبور مطابقت ندارد!")
          .required("تایید رمز عبور خود را وارد نمایید!"),
      })}
      onSubmit={(values) => {
        setShowSpinner(true);
        fetch("https://travelorganization.monster/api/User/Accounts/SignUp", {
          method: "POST",
          body: JSON.stringify({
            name: values.name,
            family: values.family,
            email: values.email,
            password: values.password,
            // re_Password: values.confirmPassword,
          }),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            setShowSpinner(false);
            if (json.isSuccess) {
              router.replace("/validation-email/");
            }
          })
          .catch((error) => {
            setShowSpinner(false);
            console.log(error.massage);
          });
      }}
    >
      {({ handleSubmit, values }) => (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar animated={true} backgroundColor="#fff" />
          <View style={styles.imageBox}>
            <Image source={require("@/assets/images/travel-logo.png")} />
          </View>
          <View style={styles.inputBox}>
            {form(values).map((item) => (
              <React.Fragment key={item.name}>
                <BaseInput
                  value={item.value}
                  name={item.name}
                  placeholder={item.placeholder}
                  icon={item.icon}
                  type={item.type as "password" | "text" | "email"}
                />
                {item.line && (
                  <View
                    style={{
                      backgroundColor: "#bbb",
                      width: "100%",
                      height: 1.5,
                      marginVertical: 15,
                    }}
                  ></View>
                )}
              </React.Fragment>
            ))}
          </View>
          <View style={styles.contentbox}>
            <BaseButton
              handleSubmit={
                handleSubmit as (e: GestureResponderEvent | undefined) => void
              }
              label={mainStrings.register}
              loader={showSpinner}
            />
            <AccountCheck type="login" />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

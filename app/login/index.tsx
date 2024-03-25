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
import { loginText, mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Snackbar } from "react-native-paper";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import BaseButton from "@/components/base/button";

const Login = () => {
  const [visible, setVisible] = useState({ show: false, error: "" });
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [resError, setResError] = useState<string>("");
  const router = useRouter();

  const onDismissSnackBar = () => setVisible({ show: false, error: "" });
  const submitHandler = (values: { email: string; password: string }) => {
    setShowSpinner(true);
    axios
      .post("https://travelorganization.monster/api/User/Accounts/Login", {
        email: values.email,
        password: values.password,
      })
      .then((json) => {
        setShowSpinner(false);
        console.log(json);
        if (json.data.isSuccess) {
          router.push("/validation-email/");
        }
      })
      .catch((error) => {
        setShowSpinner(false);
        console.log(error.response.data);
        setResError(error.response.data);
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .test("email", "ایمیل را به درستی وارد کنید", function (value) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              value as string
            );
          })
          .required("ایمیل خود را وارد نمایید!"),
        password: Yup.string()
          .min(8, "رمز عبور حداقل باید 8 کارکتر باشد!")
          .required("رمز عبور خود را وارد نمایید!")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,})/,
            "رمز عبور یابد شامل حداقل یک عدد، یک حرف خاص،حرف انگلیسی کوچک و بزرگ باشد"
          ),
      })}
      onSubmit={submitHandler}
    >
      {({ handleSubmit, values, errors }) => (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar animated={true} backgroundColor="#fff" />
          <View style={styles.imageBox}>
            <Image source={require("@/assets/images/travel-logo.png")} />
          </View>

          <View
            style={{
              ...styles.inputBox,
              borderColor:
                errors.email || errors.password || resError ? "#ff0000" : "#0C359E",
            }}
          >
            <BaseInput
              value={values.email}
              name="email"
              placeholder={mainStrings.email}
              icon="email-outline"
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
              value={values.password}
              name="password"
              placeholder={mainStrings.password}
              icon="lock-alert-outline"
              type="password"
            />
            <Text style={styles.error}>
              {errors.email || errors.password || resError}
            </Text>
          </View>
          <View style={styles.contentbox}>
            <View style={{ alignItems: "center" }}>
              <BaseButton
                handleSubmit={
                  handleSubmit as (e: GestureResponderEvent | undefined) => void
                }
                label={mainStrings.login}
                loader={showSpinner}
              />
              <Link href="/forget-password/" style={styles.forgetPassword}>
                فراموشی رمز عبور!
              </Link>
            </View>
            <AccountCheck type="register" />
            {visible.show ? (
              <Snackbar visible={visible.show} onDismiss={onDismissSnackBar}>
                ".نام کاربری یا رمز عبور اشتباه است"
              </Snackbar>
            ) : null}
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};
export default Login;

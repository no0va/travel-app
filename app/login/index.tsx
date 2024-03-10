import { Image, ScrollView, StatusBar, Text, View } from "react-native";
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
import { Link } from "expo-router";

const Login = () => {
  const [visible, setVisible] = useState({ show: false, error: "" });

  const onDismissSnackBar = () => setVisible({ show: false, error: "" });
  const submitHandler = async (data: any) => {
    try {
      const response = await fetch(
        "http://smh1381.bsite.net/api/Accounts/Signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers here
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(JSON.stringify(responseData));
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  console.log(visible.error);

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
          .min(6, "رمز عبور حداقل باید 6 کارکتر باشد!")
          .required("رمز عبور خود را وارد نمایید!"),
      })}
      onSubmit={submitHandler}
    >
      {({ handleSubmit, values, errors }) => (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar animated={true} backgroundColor="#CCF2F4" />
          <Image
            source={require("@/assets/images/login.png")}
            style={styles.image}
          />
          <View style={styles.mainBox}>
            <View style={styles.headerTitle}>
              <Text style={styles.title}>{mainStrings.login}</Text>
              <Text style={styles.description}>{loginText.description}</Text>
            </View>
            <View style={styles.contentbox}>
              <View style={styles.inputBox}>
                <BaseInput
                  value={values.email}
                  name="email"
                  placeholder={mainStrings.email}
                  icon="email-outline"
                  type="email"
                />
                <BaseInput
                  value={values.password}
                  name="password"
                  placeholder={mainStrings.password}
                  icon="lock-alert-outline"
                  type="password"
                />
                <Link href="/forget-password/" style={styles.forgetPassword}>
                  فراموشی رمز عبور!
                </Link>
                <Button
                  icon="arrow-left"
                  mode="elevated"
                  style={styles.button}
                  onPress={errors && (handleSubmit as any)}
                  disabled={!!errors.email || !!errors.password}
                  rippleColor={"#3dcbdb"}
                  textColor="rgba(12, 53, 158, 1)"
                  children={
                    <Text style={styles.labelButton}>{mainStrings.login}</Text>
                  }
                />
              </View>
              <Image
                source={require("@/assets/images/emoji _high-speed train_.png")}
                style={{ position: "absolute", top: 280, right: -30 }}
              />
              <Image
                source={require("@/assets/images/Blob 11.png")}
                style={{ position: "absolute", top: 350, left: -30 }}
              />
              <AccountCheck type="register" />
              {visible.show ? (
                <Snackbar visible={visible.show} onDismiss={onDismissSnackBar}>
                  ".نام کاربری یا رمز عبور اشتباه است"
                </Snackbar>
              ) : null}
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};
export default Login;

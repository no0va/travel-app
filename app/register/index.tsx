import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "./style";
import AccountCheck from "@/components/account-check";
import { Button } from "react-native-paper";
import { BaseInput } from "@/components/base/inputs";
import { mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Register() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("نام کاربری خود را وارد کنید!"),
        email: Yup.string()
          .email("ایمیل صحبح نیست!")
          .required("ایمیل خود را وارد نمایید!"),
        password: Yup.string()
          .min(6, "رمز عبور حداقل باید 6 کارکتر باشد!")
          .required("رمز عبور خود را وارد نمایید!"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "تاییده رمز عبور مطابقت ندارد!")
          .required("تاییده رمز عبور خود را وارد نمایید!"),
      })}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, values }) => (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar animated={true} backgroundColor="#CCF2F4" />
          <Image
            source={require("@/assets/images/login.png")}
            style={styles.image}
          />
          <View style={styles.mainBox}>
            <Text style={styles.title}>{mainStrings.register}</Text>
            <View style={styles.contentbox}>
              <View style={styles.inputBox}>
                <BaseInput
                  value={values.username}
                  name="username"
                  placeholder={mainStrings.userName}
                  icon="account-outline"
                  type="text"
                />
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
                <BaseInput
                  value={values.confirmPassword}
                  name="confirmPassword"
                  placeholder={mainStrings.confirmPassword}
                  icon="lock-check-outline"
                  type="password"
                />
                <Button
                  icon="arrow-left"
                  mode="elevated"
                  style={styles.button}
                  onPress={() => handleSubmit()}
                  rippleColor={"#3dcbdb"}
                  textColor="rgba(12, 53, 158, 1)"
                  children={
                    <Text style={styles.labelButton}>
                      {mainStrings.register}
                    </Text>
                  }
                />
              </View>
              <Image
                source={require("@/assets/images/Blob 10.png")}
                style={{ position: "absolute", top: 350, right: -30 }}
              />
              <AccountCheck type="login" />
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

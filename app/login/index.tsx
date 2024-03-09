import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "./style";
import AccountCheck from "@/components/account-check";
import { Button } from "react-native-paper";
import { BaseInput } from "@/components/base/inputs";
import { loginText, mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  // useEffect(() => {
  //   axios.post("https://smh1381.bsite.net/api/Accounts/Signup", {
  //     name: "ali",
  //     family: "abelekobha",
  //     email: "m.ehsan1381dsa@gmail.com",
  //     password: "@1234Ab123",
  //     re_Password: "@1234Ab123",
  //   }).then((json) => console.log(json.data));
    // axios("https://smh1381.bsite.net/api/Accounts/Login", {
    //   method: "POST",
    //   data: {
    //     email: "m.eh@gmail.com",
    //     password: "@S123456789",
    //   },
    // }).then((json) => console.log(json));
  // }, []);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("ایمیل صحبح نیست!")
          .required("ایمیل خود را وارد نمایید!"),
        password: Yup.string()
          .min(6, "رمز عبور حداقل باید 6 کارکتر باشد!")
          .required("رمز عبور خود را وارد نمایید!"),
      })}
      onSubmit={(values) =>
        axios("https://smh1381.bsite.net/api/Accounts/Login", {
          method: "POST",
          data: {
            email: values.email,
            password: values.password,
          },
        }).then((json) => console.log(json))
      }
    >
      {({ handleSubmit, values }) => (
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
                <Button
                  icon="arrow-left"
                  mode="elevated"
                  style={styles.button}
                  onPress={() => handleSubmit()}
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
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};
export default Login;

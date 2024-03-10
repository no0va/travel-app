import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "./style";
import AccountCheck from "@/components/account-check";
import { Button } from "react-native-paper";
import { BaseInput } from "@/components/base/inputs";
import { mainStrings } from "@/constants/srings";
import { Formik } from "formik";
import * as Yup from "yup";
import { form } from "./constant";

export default function Register() {
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
      onSubmit={(values) =>
        fetch("https://smh1381.bsite.net/api/Accounts/Signup", {
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
            if (json.isSuccess) {
              // navigation.navigate("Login", { name: "Login" });
              console.log("first");
            }
          })
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
            <Text style={styles.title}>{mainStrings.register}</Text>
            <View style={styles.contentbox}>
              <View style={styles.inputBox}>
                {form(values).map((item) => (
                  <BaseInput
                    value={item.value}
                    name={item.name}
                    placeholder={item.placeholder}
                    icon={item.icon}
                    type={item.type as "password" | "text" | "email"}
                  />
                ))}

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
                style={{
                  position: "absolute",
                  top: 350,
                  right: -30,
                  zIndex: -1,
                }}
              />
              <AccountCheck type="login" />
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

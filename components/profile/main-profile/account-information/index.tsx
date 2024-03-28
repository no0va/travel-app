import BaseAccordion from "@/components/base/base-accordion";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { GestureResponderEvent, View } from "react-native";
import { TextInput } from "react-native-paper";
import * as Yup from "yup";
import { styles } from "./style";
import { BaseInput } from "@/components/base/inputs";
import { mainStrings } from "@/constants/srings";
import { form } from "./constant";
import { useProfileContext } from "@/context/profile-context";
import BaseButton from "@/components/base/button";

export default function AccountInformation() {
  const { userDetails } = useProfileContext();

  return (
    <Formik
      initialValues={{
        name: userDetails.name,
        family: userDetails.lastName,
        nationalCode: userDetails.nationalID,
        birthday: userDetails.birthDate,
        phoneNumber: userDetails.phoneNo,
      }}
      enableReinitialize
      // validationSchema={Yup.object({
      //   email: Yup.string()
      //     .test("email", "ایمیل را به درستی وارد کنید", function (value) {
      //       return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      //         value as string
      //       );
      //     })
      //     .required("ایمیل خود را وارد نمایید!"),
      //   password: Yup.string()
      //     .min(8, "رمز عبور حداقل باید 8 کارکتر باشد!")
      //     .required("رمز عبور خود را وارد نمایید!")
      //     .matches(
      //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,})/,
      //       "رمز عبور یابد شامل حداقل یک عدد، یک حرف خاص،حرف انگلیسی کوچک و بزرگ باشد"
      //     ),
      // })}
      onSubmit={(values) => console.log(userDetails)}
    >
      {({ handleSubmit, values, errors }) => (
        <BaseAccordion title="اطلاعات حساب" icon="account">
          <View style={styles.inputBox}>
            {form(values).map((item) => (
              <View
                key={item.name}
                style={{
                  //   backgroundColor: "#bbb",
                  //   width: "100%",
                  //   height: 1.5,
                  backgroundColor: "#fff",
                  borderColor: "#aaa",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 5,
                  marginVertical: 8,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}
              >
                <BaseInput
                  value={item.value}
                  name={item.name}
                  placeholder={item.placeholder}
                  icon={item.icon}
                  iconColor="#0C359E"
                  type={item.type as "password" | "text" | "email"}
                />
              </View>
            ))}
            <BaseButton
              label="test"
              loader={false}
              handleSubmit={
                handleSubmit as (e: GestureResponderEvent | undefined) => void
              }
            />
          </View>
        </BaseAccordion>
      )}
    </Formik>
  );
}

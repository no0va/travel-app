import BaseAccordion from "@/components/base/base-accordion";
import { Formik } from "formik";
import React from "react";
import { GestureResponderEvent, View } from "react-native";
import * as Yup from "yup";
import { styles } from "./style";
import { BaseInput } from "@/components/base/inputs";
import { form } from "./constant";
import { useProfileContext } from "@/context/profile-context";
import BaseButton from "@/components/base/button";
import ProfileItem from "../profile-item";

export default function ChangePassword() {
  const { userDetails } = useProfileContext();
  const handleSubmit = (values: any) => console.log(values);
  return (
    <ProfileItem
      form={form}
      title={"تغییر رمز عبور"}
      icon={"lock"}
      submitHandler={handleSubmit}
      initailInputsValue={{
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }}
    />
  );
}

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
import ProfileItem from "../profile-item";

export default function AccountInformation() {
  const { userDetails } = useProfileContext();
  const handleSubmit = (values: any) => console.log(values);

  return (
    <ProfileItem
      form={form}
      title={"اطلاعات حساب"}
      icon={"account"}
      submitHandler={handleSubmit}
      initailInputsValue={{
        name: userDetails.name,
        family: userDetails.lastName,
        nationalCode: userDetails.nationalID,
        birthday: userDetails.birthDate,
        phoneNumber: userDetails.phoneNo,
      }}
    />
  );
}

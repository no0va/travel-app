import BaseAccordion from "@/components/base/base-accordion";
import { Formik } from "formik";
import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import AccountInformation from "./account-information";
import ChangePassword from "./change-password";
import MyTravels from "./my-travels";

export default function MainProfile() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <AccountInformation />
      <ChangePassword />
      <MyTravels />
      <BaseAccordion icon="headset" title="پشتیبانی">
        <Text>تغییر رمز عبور</Text>
      </BaseAccordion>
    </View>
  );
}

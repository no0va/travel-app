import BaseAccordion from "@/components/base/base-accordion";
import { Formik } from "formik";
import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import AccountInformation from "./account-information";

export default function MainProfile() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <AccountInformation />
      <BaseAccordion icon="lock-alert" title="تغییر رمز عبور">
        <Text>تغییر رمز عبور</Text>
      </BaseAccordion>
      <BaseAccordion icon="history" title="سفر های من">
        <Text>تغییر رمز عبور</Text>
      </BaseAccordion>
      <BaseAccordion icon="headset" title="پشتیبانی">
        <Text>تغییر رمز عبور</Text>
      </BaseAccordion>
    </View>
  );
}

import BaseAccordion from "@/components/base/base-accordion";
import { Formik } from "formik";
import React from "react";
import { GestureResponderEvent, View } from "react-native";
import * as Yup from "yup";
import { styles } from "./style";
import { BaseInput } from "@/components/base/inputs";
import { useProfileContext } from "@/context/profile-context";
import BaseButton from "@/components/base/button";

interface ProfileItemProps {
  title: string;
  icon: string;
  form: (value: any) => {
    value: any;
    name: string;
    placeholder: string;
    icon: string;
    type: string;
  }[];
  initailInputsValue: any;
  submitHandler: (values: any) => void;
}

export default function ProfileItem({
  title,
  icon,
  form,
  initailInputsValue,
  submitHandler,
}: ProfileItemProps) {
  const { userDetails } = useProfileContext();

  return (
    <Formik
      initialValues={initailInputsValue}
      enableReinitialize
      onSubmit={(values) => submitHandler(values)}
    >
      {({ handleSubmit, values, errors }) => (
        <BaseAccordion title={title} icon={icon}>
          <View style={styles.inputBox}>
            {form(values).map((item: any) => (
              <View
                key={item.name}
                style={{
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

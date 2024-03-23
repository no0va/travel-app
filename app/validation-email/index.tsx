import {
  GestureResponderEvent,
  ImageBackground,
  TextInput,
  View,
} from "react-native";
import { Text } from "react-native";
import { styles } from "./style";
import { Formik } from "formik";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import axios from "axios";
import BaseButton from "@/components/base/button";
import { useState } from "react";

export default function ValidationEmail() {
  const router = useRouter();
  const inputs = ["input1", "input2", "input3", "input4"];
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        input1: "",
        input2: "",
        input3: "",
        input4: "",
      }}
      onSubmit={(values) => {
        setShowSpinner(true);
        axios
          .get(
            `https://travelorganization.monster/api/User/Email/EmailValidation?code=${
              values.input1 + values.input2 + values.input3 + values.input4
            }`
          )
          .then((json) => {
            setShowSpinner(false);
            console.log(json);
            if (json.status === 200) {
              router.replace("/new-password/");
            }
          })
          .catch((error) => {
            setShowSpinner(false);
            console.log(error);
          });
      }}
    >
      {({ handleSubmit, values, handleChange, handleBlur }) => (
        <View style={styles.container}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>تایید کد</Text>
            <Text style={styles.description}>
              لطفا کدی که به ایمیل شما ارسال شده را وارد کنید.
            </Text>
          </View>
          <View style={styles.inputBox}>
            {inputs.map((input) => (
              <TextInput
                key={input}
                value={
                  values[input as "input1" | "input2" | "input3" | "input4"]
                }
                style={styles.input}
                placeholder="X"
                keyboardType="decimal-pad"
                onChangeText={handleChange(input)}
                secureTextEntry={false}
                onBlur={handleBlur(input)}
                maxLength={1}
                cursorColor="#0C359E"
              />
            ))}
          </View>
          <BaseButton
            label="ارسال"
            handleSubmit={
              handleSubmit as (e: GestureResponderEvent | undefined) => void
            }
            loader={showSpinner}
          />
        </View>
      )}
    </Formik>
  );
}

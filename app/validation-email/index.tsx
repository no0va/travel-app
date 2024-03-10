import { ImageBackground, TextInput, View } from "react-native";
import { Text } from "react-native";
import { styles } from "./style";
import { Formik } from "formik";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import axios from "axios";

export default function ValidationEmail() {
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        input1: "",
        input2: "",
        input3: "",
        input4: "",
      }}
      onSubmit={(values) =>
        axios
          .get(
            `https://smh1381.bsite.net/api/Accounts/EmailValidation?code=${
              values.input1 + values.input2 + values.input3 + values.input4
            }`
          )

          .then((json) => {
            // if (json.isSuccess) {
            // navigation.navigate("Login", { name: "Login" });
            // console.log("first");
            router.replace("./new-password");
            console.log("first");
            // }
          })
      }
    >
      {({ handleSubmit, values, handleChange, handleBlur }) => (
        <View style={styles.container}>
          <ImageBackground
            source={require("@/assets/images/Group 161.png")} // Replace with your image path
            style={styles.backgroundImage}
          >
            <View style={styles.headerTitle}>
              <Text style={styles.title}>تایید کد</Text>
              <Text style={styles.description}>
                لطفا کدی که به ایمیل شما ارسال شده را وارد کنید.
              </Text>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                value={values.input1}
                style={styles.input}
                placeholder="X"
                keyboardType="decimal-pad"
                onChangeText={handleChange("input1")}
                secureTextEntry={false}
                onBlur={handleBlur("input1")}
                maxLength={1}
              />
              <TextInput
                value={values.input2}
                style={styles.input}
                placeholder="X"
                keyboardType="decimal-pad"
                onChangeText={handleChange("input2")}
                secureTextEntry={false}
                onBlur={handleBlur("input2")}
                maxLength={1}
              />
              <TextInput
                value={values.input3}
                style={styles.input}
                placeholder="X"
                keyboardType="decimal-pad"
                onChangeText={handleChange("input3")}
                secureTextEntry={false}
                onBlur={handleBlur("input3")}
                maxLength={1}
              />
              <TextInput
                value={values.input4}
                style={styles.input}
                placeholder="X"
                keyboardType="decimal-pad"
                onChangeText={handleChange("input4")}
                secureTextEntry={false}
                onBlur={handleBlur("input4")}
                maxLength={1}
              />
            </View>
            <Button
              mode="elevated"
              style={styles.button}
              onPress={() => handleSubmit()}
              rippleColor={"#3dcbdb"}
              textColor="rgba(12, 53, 158, 1)"
              children={<Text style={styles.labelButton}>ارسال</Text>}
            />
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
}

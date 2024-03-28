import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import BaseButton from "../base/button";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View>
      <View style={styles.imageBox}>
        <Image source={require("@/assets/images/travel-logo.png")} />
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.title}>خوش آمدید!</Text>
        <Text style={styles.description}>
          با ما لذت یک سفر دلچسب را تجربه کنید
        </Text>
        <BaseButton
          label="ورود"
          handleSubmit={() =>
            router.push({
              pathname: "/login/",
              params: { email: "m.ehsan1381@gmail.com" },
            })
          }
          loader={false}
        />
        <BaseButton
          label="ثبت نام"
          handleSubmit={() => router.push("/register/")}
          loader={false}
        />
      </View>
    </View>
  );
}

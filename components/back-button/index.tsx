import { router } from "expo-router";
import React from "react";
import { IconButton } from "react-native-paper";

export default function BackButton() {
  return (
    <IconButton
      icon="arrow-left"
      iconColor="#0C359E"
      mode="outlined"
      style={{ borderColor: "#0C359E", margin: 0 }}
      size={20}
      onPress={() => router.back()}
    />
  );
}

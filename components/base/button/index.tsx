import React from "react";
import { ActivityIndicator, GestureResponderEvent, Text } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./style";

export default function BaseButton({
  handleSubmit,
  label,
  loader,
}: {
  handleSubmit: (e: GestureResponderEvent | undefined) => void;
  label: string;
  loader: boolean;
}) {
  return (
    <Button
      mode="elevated"
      style={styles.button}
      onPress={handleSubmit}
      // disabled={!!errors.email || !!errors.password}
      rippleColor={"#3dcbdb"}
      textColor="rgba(12, 53, 158, 1)"
      children={
        loader ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.labelButton}>{label}</Text>
        )
      }
    />
  );
}

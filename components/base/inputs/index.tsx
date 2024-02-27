import { TextInput, View } from "react-native";

export const BaseInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <View>
      <TextInput
        style={{
          borderBottomColor: "#000",
          borderBottomWidth: 2,
          direction: "rtl",
          fontFamily: "iran-sans",
          width: "100%",
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

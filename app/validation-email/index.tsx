import { Button, View } from "react-native";

export default function ValidationEmail({navigation} :any) {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => {
          navigation.navigate("Register", { name: "Jane" })
          console.log("first")
        }}
      />
    </View>
  );
}
